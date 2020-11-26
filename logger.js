/**
 * https://log4js-node.github.io/log4js-node/index.html
 */
const log4js = require("log4js");
const path = require("path");

log4js.configure({
    appenders: {
        std: { type: "stdout" },
        app: {
            type: "file",
            filename: path.join(__dirname, "./logs/access.log"),
        },
        err: {
            type: "file",
            filename: path.join(__dirname, "./logs/error.log"),
        },
    },
    categories: {
        default: { appenders: ["std"], level: "INFO" },
        app: { appenders: ["app", "std"], level: "MARK" },
        error: { appenders: ["err", "std"], level: "ERROR" },
    },
});

/**
 * log level https://github.com/log4js-node/log4js-node/blob/f8d46a939279c0ab4efc8bb5f0478c4b0949a4cf/lib/levels.js#L90
  ALL: { value: Number.MIN_VALUE, colour: 'grey' },
  TRACE: { value: 5000, colour: 'blue' },
  DEBUG: { value: 10000, colour: 'cyan' },
  INFO: { value: 20000, colour: 'green' },
  WARN: { value: 30000, colour: 'yellow' },
  ERROR: { value: 40000, colour: 'red' },
  FATAL: { value: 50000, colour: 'magenta' },
  MARK: { value: 9007199254740992, colour: 'grey' }, // 2^53
  OFF: { value: Number.MAX_VALUE, colour: 'grey' }
 */

const stdLogger = log4js.getLogger("std");
const errLogger = log4js.getLogger("error");
const appLogger = log4js.getLogger("app");

function info() {
    stdLogger.info(...arguments);
}

function warn() {
    stdLogger.warn(...arguments);
}

function debug() {
    stdLogger.debug(...arguments);
}

function error() {
    errLogger.error(...arguments);
}

function startEngine(obj) {
    let env = Object.fromEntries(
        Object.keys(process.env)
            .filter((i) => i.startsWith("BFF_"))
            .map((i) => [i, process.env[i]])
    );
    appLogger.mark(`>>>>>>>>>>>>>>>>>>>>>>>>>>
bff server started
environments:   ${JSON.stringify(env, null, 4)}
configs: ${JSON.stringify(obj, null, 4)}
`);
}

// 监听未捕获的异常
process.on("uncaughtException", (e) => error(e));
// 监听Promise没有被捕获的失败函数
process.on("unhandledRejection", (e, promise) => error(e));

module.exports = {
    error,
    debug,
    info,
    warn,
    startEngine,
};

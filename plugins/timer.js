const logger = require("../logger");

function serverWillStart() {
    console.log("server start");
}

function log() {
    console.log(...arguments);
}

function requestDidStart() {
    let begin = new Date();
    return {
        willSendResponse() {
            let d = new Date() - begin,
                t = d + "ms";
            if (d > 10 * 1000) t = parseInt(d / 1000) + "s";
            logger.info("response in " + t);
        },
    };
}

module.exports = {
    serverWillStart,
    requestDidStart,
};

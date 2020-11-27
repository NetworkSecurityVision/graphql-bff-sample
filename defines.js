/**
 * GraphQL Spec https://spec.graphql.cn/
 */

const fs = require("fs");
const path = require("path");
let { buildSchema } = require("graphql");

const SCHEMA_FOLDER = "./schemas";
const SCHEMA_COMBINED_FILE = "./combined.graphql";

const logger = require("./logger");

function readContent() {
    let content = "",
        folder = path.join(__dirname, SCHEMA_FOLDER);
    let dir = fs.readdirSync(folder, {
        withFileTypes: true,
    });
    for (dirent of dir)
        if (dirent.isFile()) {
            content += `\n# ${dirent.name}\n`;
            content += fs.readFileSync(path.join(folder, dirent.name), "utf-8");
        }
    return content;
}

function combine() {
    let content = `# DO NOT CHANGE! this is auto generated file.\n# ${new Date()}\n`;
    content += readContent();

    fs.writeFileSync(path.join(__dirname, SCHEMA_COMBINED_FILE), content);

    try {
        let autoInjectByApollo = `
            scalar Upload
        `;
        // validate schame syntax
        buildSchema(content + autoInjectByApollo);
    } catch (e) {
        logger.error("Schema 文件语法错误\n", e.toString());
    }
    return content;
}

const Defines = combine();

module.exports = Defines;

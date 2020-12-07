/**
 * GraphQL Spec https://spec.graphql.cn/
 */

import fs from "fs";
import path from "path";
import { buildSchema } from "graphql";

const SCHEMA_FOLDER = "./schemas";
const SCHEMA_COMBINED_FILE = "./combined.graphql";

import logger from "./logger.js";

function readContent() {
    let content = "";
    let dir = fs.readdirSync(SCHEMA_FOLDER, {
        withFileTypes: true,
    });
    for (let dirent of dir)
        if (dirent.isFile()) {
            content += `\n# ${dirent.name}\n`;
            content += fs.readFileSync(path.join(SCHEMA_FOLDER, dirent.name), "utf-8");
        }
    return content;
}

function combine() {
    let content = `# DO NOT CHANGE! this is auto generated file.\n# ${new Date()}\n`;
    content += readContent();

    fs.writeFileSync(SCHEMA_COMBINED_FILE, content);

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

export default Defines;

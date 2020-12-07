import { codegen } from "@graphql-codegen/core";
import { buildSchema } from "graphql";
import fs from "fs";
import path from "path";
import typescriptPlugin from "@graphql-codegen/typescript";

async function gen() {
    let content = fs.readFileSync("./combined.graphql");
    let schema = buildSchema(String(content));

    let types = await codegen({
        schema,
        plugins: [{ typescript: {} }],
        pluginMap: { typescript: typescriptPlugin },
    });

    fs.writeFileSync("./index.d.ts", types);
}

gen();

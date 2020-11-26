const { codegen } = require("@graphql-codegen/core");
const { buildSchema } = require("graphql");
const fs = require("fs");
const path = require("path");
const typescriptPlugin = require("@graphql-codegen/typescript");

async function gen() {
    let content = fs.readFileSync("./combined.graphql");
    let schema = buildSchema(String(content));


    let types = await codegen({
        schema,
        plugins: [{ typescript: {} }],
        pluginMap: { typescript: typescriptPlugin },
    });

    fs.writeFileSync(path.join(__dirname, "./index.d.ts"), types);
}

gen();

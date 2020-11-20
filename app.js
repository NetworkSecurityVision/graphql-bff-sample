const { ApolloServer, gql } = require("apollo-server-express");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

require("dotenv").config();

function readSchemaFile() {
    let read = (fname) =>
        fs.readFileSync(path.join(__dirname, `./schema/${fname}`), "utf-8");

    let schema = "";
    let dir = fs.readdirSync("./schema", { withFileTypes: true });
    for (dirent of dir) {
        if (dirent.isFile()) schema += read(dirent.name);
    }
    return schema;
}

const typeDefs = gql(readSchemaFile());
const resolvers = require("./resolvers");
const mocks = process.env.MOCK == "true" ? require("./utils/mocks") : false;

const server = new ApolloServer({
    cors: true,
    typeDefs,
    resolvers,
    context: (req) => {
        let body = req.req.body;
        if (!body.operationName) console.log(body.query);
    },
    // 允许在生产环境使用模型描述
    playground: true,
    introspection: true,
    mocks,
    formatError: (error) => {
        return error;
    },
    tracing: process.env.NODE_ENV == "development",
});
server.applyMiddleware({
    app,
    path: process.env.BASE_PATH,
    disableHealthCheck: false,
});

app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready, ${server.graphqlPath}`);
});

// WARN, if ENV is not set
["GRPC_PEDESTAL_URI", "HTTP_HAOJING_URI"].forEach((i) => {
    if (!process.env[i]) console.warn(`env ${i} is missing`);
});

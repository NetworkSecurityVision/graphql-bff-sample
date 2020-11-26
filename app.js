// env first
require("dotenv").config();

const express = require("express");
// 用 apollo-server-express 才能自定义 entry path
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();
const Defines = require("./defines");

const resolvers = require("./resolvers");
const mocks = require("./mocks");
const logger = require("./logger");
const plugins = require("./plugins");

const server = new ApolloServer({
    cors: true,
    typeDefs: gql(Defines),
    resolvers,
    // 允许在生产环境使用模型描述
    playground: true,
    introspection: true,
    mocks: process.env.BFF_MOCK ? mocks : false,
    context: (req) => ({}),
    formatError: (e) => {
        logger.error(e.extensions.exception?.stacktrace.slice(0, 2).join("\n"));
        return e;
    },
    tracing: process.env.NODE_ENV == "development",
    plugins: plugins,
    logger: logger,
});

server.applyMiddleware({
    app,
    path: process.env.BFF_BASE_PATH,
    disableHealthCheck: false,
});

const port = process.env.BFF_PORT || 5910;
app.listen({ port }, () => {
    // 服务启动日志
    let { graphqlPath } = server;
    logger.startEngine({ port, graphqlPath });
});

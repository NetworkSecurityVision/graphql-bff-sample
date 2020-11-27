// env first
require("dotenv").config();
const http = require("http");

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
    subscriptions: {
        onConnect: (params, webSocket) => {
            console.log("websocket connected");
            if (params.jwt) return Promise.resolve({});
            else return Promise.resolve(true);
            throw new Error("Auth failed!");
        },
        onDisconnect: (webSocket, context) => {
            console.log("websocket disconnected");
        },
    },
});

server.applyMiddleware({
    app,
    path: process.env.BFF_BASE_PATH,
    disableHealthCheck: false,
});

const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);

const port = process.env.BFF_PORT || 5910;

httpServer.listen({ port }, () => {
    let env = Object.keys(process.env)
        .filter((i) => i.startsWith("BFF_"))
        .map((i) => i + ": " + process.env[i])
        .join("\n");

    logger.mark(`
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
BFF Server Started 
------------------------------------
环境变量
${env}
------------------------------------
port: ${port}
path: ${server.graphqlPath}
`);
});

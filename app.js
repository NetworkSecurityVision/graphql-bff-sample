// env first
import dotenv from "dotenv";
dotenv.config();

import http from "http";

import express from "express";
// 用 apollo-server-express 才能自定义 entry path
import { ApolloServer, gql } from "apollo-server-express";


const app = express();
import Defines from "./defines.js";
import resolvers from "./resolvers/index.js";
import mocks from "./mocks/index.js";
import logger from "./logger.js";
import plugins from "./plugins/index.js";

const server = new ApolloServer({
    cors: true,
    typeDefs: gql(Defines),
    resolvers,
    // 允许在生产环境使用模型描述
    playground: true,
    introspection: true,
    mocks: process.env.BFF_MOCK == "true" && mocks,
    context: (ctx) => {},
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

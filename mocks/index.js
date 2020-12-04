// mocking ways
// https://www.apollographql.com/docs/apollo-server/testing/mocking/

const casual = require("casual");
const { mocks: customScalarMocks } = require("graphql-scalars");

function sleep(n) {
    if (!n) n = Math.random();
    return new Promise((r) => setTimeout(r, n * 1000));
}

const MOCKS = {
    ...customScalarMocks,
    Query: () => ({
        ping: async () => {
            await sleep(1);
            return "pong";
        },
    }),
    Int: async () => {
        await sleep();
        return casual.integer((from = 0), (to = 1000));
    },
    JSON: () => {
        return {
            a: 1,
        };
    },
};

module.exports = MOCKS;

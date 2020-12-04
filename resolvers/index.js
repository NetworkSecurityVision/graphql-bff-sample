const Query = require("./query");
const Mutation = require("./mutation");
const Subscription = require("./subscription");
const { resolvers: customScalarResolvers } = require("graphql-scalars");

const resolvers = {
    ...customScalarResolvers,
    Query,
    Mutation,
    Subscription,
};

module.exports = resolvers;

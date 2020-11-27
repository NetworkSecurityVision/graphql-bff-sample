const Query = require("./query");
const Mutation = require("./mutation");
const Subscription = require("./subscription");
const GraphQLJSON = require("graphql-type-json");

const resolvers = {
    Query,
    Mutation,
    Subscription,
    JSON: GraphQLJSON,
};

module.exports = resolvers;

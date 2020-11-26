const Query = require("./query");
const GraphQLJSON = require("graphql-type-json");

const resolvers = {
    Query,
    JSON: GraphQLJSON,
};

module.exports = resolvers;

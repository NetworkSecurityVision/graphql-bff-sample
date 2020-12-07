import Query from "./query.js";
import Mutation from "./mutation.js";
import Subscription from "./subscription.js";
import { resolvers as customScalarResolvers } from "graphql-scalars";

const resolvers = {
    ...customScalarResolvers,
    Query,
    Mutation,
    Subscription,
};

export default resolvers;

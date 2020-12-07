import { PubSub } from "apollo-server-express";

const pubsub = new PubSub();

const POST_ADDED = "POST_ADDED";

let n = 0;
setInterval(() => {
    pubsub.publish(POST_ADDED, { count: n++ });
}, 1000);

const count = {
    subscribe: () => pubsub.asyncIterator([POST_ADDED]),
};

export default {
    count,
};

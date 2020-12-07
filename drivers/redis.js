/**
 *
 * https://github.com/NodeRedis/node-redis
 */

import redis from "redis";
const client = redis.createClient();

client.on("error", function (error) {
    console.error(error);
});

client.set("key", "value", redis.print);
client.get("key", redis.print);

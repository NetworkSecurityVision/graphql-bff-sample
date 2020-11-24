/**
 * https://github.com/alexguan/node-zookeeper-client
 */

var zookeeper = require("node-zookeeper-client");

var client = zookeeper.createClient("localhost:2181");
var path = '/test'

client.once("connected", function () {
    console.log("Connected to the server.");

    client.create(path, function (error) {
        if (error) {
            console.log("Failed to create node: %s due to: %s.", path, error);
        } else {
            console.log("Node: %s is successfully created.", path);
        }

        client.close();
    });
});

client.connect();

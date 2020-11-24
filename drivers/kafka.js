/**
 * https://github.com/SOHU-Co/kafka-node
 */
let kafka = require("kafka-node");
let client = new kafka.KafkaClient({
    kafkaHost: "localhost:9092",
    connectTimeout: 3000,
});

const admin = new kafka.Admin(client); // client must be KafkaClient
admin.listGroups((err, res) => {
    console.log("consumerGroups", res);
});

let Consumer = kafka.Consumer,
    consumer = new Consumer(
        client,
        [
            { topic: "topic1", partition: 0 },
            { topic: "topic2", partition: 1 },
        ],
        { autoCommit: false }
    );

consumer.on("message", function (message) {
    console.log(message);
});

let Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    producer = new Producer(client),
    km = new KeyedMessage("key", "message"),
    payloads = [
        { topic: "topic1", messages: "hi", partition: 0 },
        { topic: "topic2", messages: ["hello", "world", km] },
    ];

producer.on("ready", function () {
    console.log("ready to send");
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});

producer.on("error", function (err) {});

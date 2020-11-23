/*

ES 分布式搜索引擎的客户端
https://www.elastic.co/cn/

文档： https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html

*/
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });

client.cat.health({}, (err, res) => {
    if (err) console.log(err);
    else console.log(res.body);
});

// callback API
// client.search(
//     {
//         index: "kibana_sample_data_ecommerce",
//         body: {
//             query: {
//                 match: { hello: "world" },
//             },
//         },
//     },
//     (err, result) => {
//         if (err) console.log(err);
//         else console.log(result);
//     }
// );

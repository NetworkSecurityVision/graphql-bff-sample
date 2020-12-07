/*

文档： https://microsoft.github.io/etcd3/classes/etcd3.html

*/

import { Etcd3 } from "etcd3";
const client = new Etcd3({ hosts: "localhost:2379" });

(async () => {
    await client.put("foo").value("bar");

    const fooValue = await client.get("foo").string();
    console.log("foo was:", fooValue);

    const allFValues = await client.getAll().prefix("f").keys();
    console.log('all our keys starting with "f":', allFValues);

    await client.delete().all();
})();

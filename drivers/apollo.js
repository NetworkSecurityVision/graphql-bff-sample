/*

Apollo（阿波罗）是携程框架部门研发的分布式配置中心，
能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，
并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。

https://github.com/ctripcorp/apollo

Apollo 没有官方的 Node SDK，选择了一个使用量稍微多一些的开源SDK
 
https://www.npmjs.com/package/ctrip-apollo

*/

import apollo from "ctrip-apollo";

const namespace = apollo({
    host: "http://localhost:8080",
    appId: "SampleApp",
    // 禁止监听，默认打开，监听配置变更可以做到实时刷新
    enableUpdateNotification: true,
})
    .cluster("default")
    .namespace("application");

namespace.on("change", (e) => {
    // enableUpdateNotification 设置为 true，然后当有新配置发生变更时，会接到推送(实际采用轮询监听方式)
    console.log("key", e.key);
    console.log("oldValue", e.oldValue);
    console.log("newValue", e.newValue);
});

const start = async () => {
    await namespace.ready();
    console.log(namespace.config());
    // => {timeout: 100}
};

start();

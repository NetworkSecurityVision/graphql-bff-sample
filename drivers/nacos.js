import { NacosConfigClient } from "nacos";

// for direct mode
const configClient = new NacosConfigClient({
    serverAddr: "127.0.0.1:8848",
});

(async function () {
    // get config once
    let c1 = await configClient.getConfig("test", "DEFAULT_GROUP");
    console.log("getConfig = ", c1);

    // listen data changed
    configClient.subscribe({ dataId: "test", group: "DEFAULT_GROUP" }, (cnt) =>
        console.log(cnt)
    );

    // publish config
    let c2 = await configClient.publishSingle("test", "DEFAULT_GROUP", "测试");
    console.log("getConfig = ", c2);

    // remove config
    await configClient.remove("test", "DEFAULT_GROUP");
})();

///////////////////////////////////////////////////////////////////////

/*
  nacos 官方的 node sdk 是 nacos-sdk-nodejs（https://www.npmjs.com/package/nacos）
  但是官方库不支持使用账号密码登录，官方库中使用多重三方库依赖，因此无法简单的fork并修改
  采用直接访问接口方式，访问方法参考 nacos Python 库实现
  // 参考 https://github.com/nacos-group/nacos-sdk-python/blob/279a0d3f066a180039f05f445ba92d6ee5e6e1c3/nacos/client.py#L364
*/
import got from "got";
function getConfigWithPassword(group, dataId, username, password) {
    const { NACOS_URI } = process.env;
    let PATH = NACOS_URI + "/nacos/v1/cs/configs";
    return got
        .get(PATH, { searchParams: { dataId, group, username, password } })
        .then((res) => res.body);
}

/*
gRPC 文档
https://grpc.io/docs/languages/node/basics/

gRPC node 文档
https://grpc.github.io/grpc/node/
*/

import grpc from "@grpc/grpc-js";
import loader from "@grpc/proto-loader";
import path from "path";

function client(filename, packageName, service) {
    const definition = loader.loadSync(`${filename}`, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
        // CAUTION: proto files import path relative from 2 places
        // proto 文件会有互相引用的情况，所以 includeDirs 参数可以指定引用的根路径
        // 通过指定 includeDirs 可以支持大项目的 proto 文件定义
        includeDirs: [
            path.join(import.meta.url, ".."),
            path.join(import.meta.url, "../api/protobuf-spec"),
        ],
    });
    const proto = grpc.loadPackageDefinition(definition);

    let Client = proto;
    for (let i of [...packageName.split("."), service]) {
        if (i) Client = Client[i];
    }

    return new Client(
        process.env.GRPC_PEDESTAL_URI,
        grpc.credentials.createInsecure()
    );
}

let _clients = {};

function proxy(file, packageName, service) {
    if (!file || !packageName)
        throw Error("Target must contain file and service field");

    function getCachedlient() {
        const K = file + packageName;
        if (!_clients[K]) _clients[K] = client(file, packageName, service);
        return _clients[K];
    }

    const handler = {
        get: function (target, prop, receiver) {
            let client = getCachedlient();
            return function () {
                let [params, callback] = arguments;
                if (callback) {
                    client[prop](...arguments);
                } else {
                    return new Promise((resolve, reject) => {
                        client[prop](params, (err, res) => {
                            if (err) reject(err);
                            else resolve(res);
                        });
                    });
                }
            };
        },
    };
    return new Proxy({ file, packageName, service }, handler);
}

const clients = {
    WebsitesClient: proxy(
        "site_security_situation/v1/site_security_situation.proto",
        "SiteSecuritySituationService"
    ),
    VisionClient: proxy(
        "vision/v1/vision.proto",
        "chaitin.pedestal.api.vision.v1",
        "VisionStatisticService"
    ),
    OrganizationClient: proxy(
        "asset/v1/organization.proto",
        "chaitin.pedestal.api.asset.v1",
        "OrganizationService"
    ),
    AlarmClient: proxy(
        "alarm/v1/alarm.proto",
        "chaitin.pedestal.api.alarm.v1",
        "AlarmService"
    ),
};

module.exports = clients;

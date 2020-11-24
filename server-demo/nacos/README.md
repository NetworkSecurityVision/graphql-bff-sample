# Nacos

https://nacos.io/

启动 Docker 服务

```shell
docker run --name nacos-server \
    -p 8848:8848 \
    -e PREFER_HOST_MODE=hostname \
    -e MODE=standalone \
    nacos/nacos-server
```
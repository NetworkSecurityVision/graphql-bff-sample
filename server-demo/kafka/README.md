# Kafka

参考文档：https://hub.docker.com/r/wurstmeister/kafka/

注意：如果要启动多个 Broker，需要手动修改 KAFKA_ADVERTISED_HOST_NAME 的值为宿主机的 IP（不能是 localhost）

启动 Docker 服务

```shell
docker-compose up
```

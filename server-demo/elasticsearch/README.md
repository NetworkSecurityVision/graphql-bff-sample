# Elastic

安装 ElasticSearch

https://www.elastic.co/guide/en/elasticsearch/reference/7.10/docker.html

```
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.10.0
```

可选安装：Elastic 客户端

https://www.elastic.co/guide/en/elastic-stack-get-started/current/get-started-elastic-stack.html#install-kibana

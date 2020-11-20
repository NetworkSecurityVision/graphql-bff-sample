# Graphql Server Reference Practice

Few times I was on charge of a web frontend project depreated from backend, but the API was totaly depend on backend, It's not a true front-back sepreated, and I was consider how to resolve this. Then I found the [BFF](https://akfpartners.com/growth-blog/backend-for-frontend) would be my antidote, so I wrote a reference project for next similar project.

## Scenarios

This reference project is not a general solution, please make sure you understand the scenario that this project in before use it.

    This project used as a BFF server for SMALL project, which would be considered as a extend of frontend, it can not offer capacity beyound backend services. When you developing a frontend project and the API is not friendly, It's time to use a BFF structure like this one.

## Principal

Again it's not for general purpose, so please follow the principals to carry out best practice. 

**Stateless**

It's a extend of frontend, not a real backend service, avoid to store any state in this server. The Simple makes you Correct.

**No TypeScript**

Don't misstaken, I like TypeScript and I use it in every new frontend project. It's just not suitable in a BFF service, because we are not in a big scale project, unit tests are so far so good.

**Doc maybe unnecessary**

As we use GraphQL, and this service is part of frontend, we should not write those obscure APIs.

## Folder

```
.env
app.js
schemas/
    a.gql
    b.gal
resolvers/
    a.js
    b.js
drivers/
    http.js
    grpc.js
    thrift.js
    nacos.js
logs/
    error.log
    access.log
```

## TODO

Drivers

- [ ] http/https
- [ ] gRPC
- [ ] thrift
- [ ] nacos

WebSocket: TODO
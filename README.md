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

## Folders

-   drivers

    As a stateless bff server, all data come from other services, differenet kind of services, so we need different ways to connect with other servers, here are all the utilities to connect other service. **Notice**: driver only provide communication tunnel, _NO_ business logic here.

    -   `grpc.js` gRPC driver
    -   `nacos.js` Nacos driver
    -   `http.js` Http driver
    -   ...others Other drivers

-   server-demo

    Simulate other services, and test does drivers work as expected. It's test only.

-   logs

    record bff server logs, and logs _SHOULD_ print to both files and stdout, the files record critical info and normal infomation print into stdout like terminal. For example, when we use docker, use `docker logs -f xxx` to follow rolling logs, and go into the docker to check important logs in `access.log` and `error.log`

    -   `access.log` server routine log, _SHOULD_ be simpily
    -   `error.log` record errors that in server

    logs auto listen on process error `uncaughtException`, `unhandledRejection` and echo to `error.log` files

-   defines.js

    read graphql define files from `./schemas` folder combine them and validate and export to a single file and return a graphql document instance

-   mocks TODO

-   schemas TODO

-   resolvers TODO

-   app.js

-   .env

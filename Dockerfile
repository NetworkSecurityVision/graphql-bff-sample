FROM node:14-alpine

ARG BASE_PATH

ENV BASE_PATH $BASE_PATH

ENV DEBUG server
ENV NODE_ENV production
ENV APOLLO_ENV production
ENV MOCK false

COPY . /app
WORKDIR /app
RUN npm config set registry $NPM_REGISTRY
RUN npm ci
CMD npm start
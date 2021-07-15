FROM node:13.12.0-alpine as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

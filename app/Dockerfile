FROM node:12
LABEL maintainer="serverv6"

WORKDIR /usr/src/app

COPY package*.json ./
#Copy App files
COPY ./public public
COPY ./src src

RUN npm install

EXPOSE 3000
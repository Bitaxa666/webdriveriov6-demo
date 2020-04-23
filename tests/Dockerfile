FROM node:12
LABEL maintainer="webdriverIov6"

WORKDIR /usr/src/tests

COPY package*.json ./
#Copy tests files
COPY ./tsconfig.json ./
COPY ./wdio.conf.js ./
COPY ./wdio-headles.conf.js ./
COPY ./specs specs
COPY ./types types
COPY ./pages pages
COPY ./models models

RUN npm install
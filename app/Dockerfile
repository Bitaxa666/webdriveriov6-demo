FROM node:12.6.1
LABEL maintainer="webdriverIov6"

ADD ./package.json package.json
ADD ./package-lock.json package-lock.json

ADD ./public public
ADD ./src src

RUN npm install
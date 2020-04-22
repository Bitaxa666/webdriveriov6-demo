FROM node:12.6.1
LABEL maintainer="webdriverIov6"

ADD ./package.json package.json
ADD ./package-lock.json package-lock.json

RUN npm install
ADD ./tsconfig.json ./
ADD ./wdio.conf.js ./
ADD ./wdio-headles.conf.js ./
ADD ./specs specs
ADD ./types types
ADD ./pages pages
ADD ./models models

CMD [ "mpn run ci"]
FROM node:4.7
MAINTAINER Ian Laird <ilaird@velma.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
CMD npm start

ADD package.json /usr/src/app
ADD Service.yml /usr/src/app
ADD src /usr/src/app/src

RUN npm install --production

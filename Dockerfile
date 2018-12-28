FROM node:11.6.0-stretch-slim

ENV APP_DIR /app

# doing the npm install separately can speed the build up
ADD package.json /tmp/package.json
ADD yarn.lock /tmp/yarn.lock
RUN cd /tmp && yarn install

RUN mkdir -p ${APP_DIR} && mv /tmp/node_modules ${APP_DIR}/node_modules/

WORKDIR ${APP_DIR}
ADD . ${APP_DIR}

EXPOSE ${APP_PORT}

CMD ["node", "./src/index.js"]
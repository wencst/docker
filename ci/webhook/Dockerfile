FROM node:14.7.0-alpine3.12
COPY webhook.js /usr/local/web/webhook.js
COPY execShell.sh /usr/local/web/execShell.sh
COPY repositories /etc/apk/repositories
ENV HOOKTYPE github
WORKDIR /usr/local/web/
RUN cd /usr/local/web && npm install git-webhook-ci --registry=https://registry.npm.taobao.org  && apk update && apk add git docker openrc --no-cache && rc-update add docker boot && rm /var/cache/apk/*
EXPOSE 8081
CMD ["node","webhook.js"]


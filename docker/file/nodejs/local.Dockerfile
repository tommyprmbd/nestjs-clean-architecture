FROM node:20-alpine

COPY --chown=node:node ./ /app

WORKDIR /app

RUN apk update \
    && apk add curl \
    && apk add tzdata 

RUN cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
RUN echo "Asia/Jakarta" >  /etc/timezone
RUN date

RUN rm -rf /tmp/* \
    && apk -v cache clean

RUN npm i -g @nestjs/cli 

USER node

RUN npm install && npm cache clean --force

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
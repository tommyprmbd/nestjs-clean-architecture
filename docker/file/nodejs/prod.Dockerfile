FROM node:20-alpine AS builder

COPY --chown=node:node ./ /app

WORKDIR /app

RUN npm install && npm cache clean --force

RUN npm run build

RUN mkdir production

RUN cp -rv dist production \
    && cp -rv node_modules production \
    && cp -rv package* production \
    && cp -rv environment production

FROM node:20-alpine AS production

RUN apk update \
    && apk add curl \
    && apk add tzdata 

RUN cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
RUN echo "Asia/Jakarta" >  /etc/timezone
RUN date

RUN rm -rf /tmp/* \
    && apk -v cache clean

WORKDIR /app

RUN npm i -g @nestjs/cli

COPY --chown=node:node --from=builder /app/production /app

RUN npm ci --only=production

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]

FROM node:20-slim

COPY --chown=node:node ./ /app

WORKDIR /app

RUN apt-get update \
    && apt-get install -y curl \
    && apt-get install -y procps \
    && apt-get install -y tzdata 

RUN cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
RUN echo "Asia/Jakarta" >  /etc/timezone
RUN date

RUN rm -rf /var/lib/apt/lists/*

RUN npm i -g @nestjs/cli 

USER node

RUN npm install && npm cache clean --force

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
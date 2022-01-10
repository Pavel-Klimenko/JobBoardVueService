FROM ubuntu:latest

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y curl libssl1.1 libssl-dev libnode-dev node-gyp
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -

RUN apt-get update && apt-get install -y npm && rm -rf /var/lib/apt/lists/*
RUN npm install -g yarn

WORKDIR /srv/app
COPY app/package*.json ./
RUN yarn global add @vue/cli
RUN yarn install

# Bundle app source
COPY ./app .

EXPOSE 8080

CMD [ "yarn", "serve"]

FROM haikson/vuejs:latest

ENV DEBIAN_FRONTEND noninteractive

WORKDIR /srv/app
COPY app/package*.json ./
RUN yarn install

# Bundle app source
COPY ./app .

#EXPOSE 8811

CMD [ "yarn", "serve"]

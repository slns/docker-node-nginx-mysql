FROM node:15 as build

WORKDIR /usr/src/app

# RUN apt-get update && apt-get install -y wget

# ENV DOCKERIZE_VERSION v0.6.1
# RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

VOLUME ./node:/usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY package*.json .

RUN npm install

COPY . .

## Second Stage ##
FROM node:15-alpine

WORKDIR /usr/src/app

#RUN apk add --no-cache openssl

#ENV DOCKERIZE_VERSION v0.6.1
#RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY --from=build /usr/src/app .

EXPOSE 3000

CMD [ "node", "index.js" ]
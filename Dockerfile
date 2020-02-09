FROM node:12-alpine

USER root
# RUN apk add --no-cache --virtual .build-deps git make
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Install ALL app dependencies (including dev)
COPY package.json ./
RUN npm install --loglevel warn

# Bundle app source
COPY . ./

RUN mkdir -p ./dist/webfonts \
  && cp -R node_modules/@fortawesome/fontawesome-free/webfonts ./dist/ \
  && node_modules/.bin/webpack -p \
  && rm -rf node_modules \
  && npm install --production --loglevel warn \
  && npm cache clear --force

RUN chown node:node /home/node -R \
  && chmod -R 750 /home/node/app

# RUN apk del .build-deps

USER node
EXPOSE 3000
ENV NODE_ENV production
CMD ["npm", "run", "web"]

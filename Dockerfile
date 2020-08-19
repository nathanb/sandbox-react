FROM node:14-alpine AS base
RUN mkdir -p /home/node/app
RUN chown -R node:node /home/node && chmod -R 770 /home/node
WORKDIR /home/node/app

FROM base AS builder-server
WORKDIR /home/node/app
RUN apk add --no-cache --virtual .build-deps git make python g++
COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./package-lock.json ./package-lock.json
USER node
RUN npm install --loglevel warn --production

# builds production client-side
FROM builder-server AS builder-client
WORKDIR /home/node/app
COPY --chown=node:node . ./
USER node
RUN npm install --loglevel warn && npm run build
EXPOSE 3000
CMD ["npm", "run", "dev"]

# production runtime; excludes build tools
FROM base AS production
WORKDIR /home/node/app
USER node
COPY --chown=node:node --from=builder-client /home/node/app/dist ./dist/
COPY --chown=node:node --from=builder-server /home/node/app/node_modules ./node_modules
COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./package-lock.json ./package-lock.json
COPY --chown=node:node ./assets ./assets
COPY --chown=node:node ./bin ./bin
COPY --chown=node:node ./src ./src
EXPOSE 3000
CMD ["npm", "run", "web"]

FROM node:lts-alpine@sha256:fb6cb918cc72869bd625940f42a7d8ae035c4e786d08187b94e8b91c6a534dfd

RUN apk add dumb-init
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY package*.json ./
COPY ../data/.env ./

RUN npm ci --only=production
COPY --chown=node:node . .
EXPOSE 5000
USER node
CMD ["dumb-init", "node", "index.js"]
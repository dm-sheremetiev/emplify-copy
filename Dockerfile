ARG NODE_VERSION=20.10.0-alpine3.19

FROM node:$NODE_VERSION AS base
ENV NODE_OPTIONS=--max-old-space-size=16384
WORKDIR /base
COPY package*.json ./
RUN npm ci
COPY . /base

FROM base AS build
ENV NODE_ENV=production
ENV NODE_OPTIONS=--max-old-space-size=16384
WORKDIR /build
COPY --from=base /base ./
RUN npm run build --verbose

FROM node:$NODE_VERSION AS production
ENV NODE_ENV=production
ENV NODE_OPTIONS=--max-old-space-size=16384
WORKDIR /app
COPY --from=build /build ./

# add curl capability for convenience
RUN apk add curl
# update this package frequently
# RUN npm install -g pm2@5.3.0

EXPOSE 80
CMD npm run start -- --port 80
# CMD pm2 start npm --  start --port 80


#
# Builder stage.
# This state compile our TypeScript to get the JavaScript code
#
FROM node:16 AS builder

WORKDIR /usr/src/app

COPY . .

RUN curl -sfL https://gobinaries.com/tj/node-prune | bash -s -- -b /usr/local/bin

RUN yarn install --frozen-lockfile --silent --network-timeout 100000

RUN yarn build

RUN yarn install --production --frozen-lockfile --silent && /usr/local/bin/node-prune

#
# Production stage.
# This state compile get back the JavaScript code from builder stage
# It will also install the production package only
#
FROM node:16-alpine

WORKDIR /app

ENV PORT 3000
ENV NODE_ENV=production
ENV NODE_PATH=/app/dist/

## We just need the build to execute the command
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

## uncomment following line, if you want to mount the templates folder
#COPY ./templates /app/templates

## uncomment following line, if you want to mount the public folder
#COPY ./public /app/public

ENTRYPOINT [ "/app/node_modules/.bin/next" ]
CMD [ "start", "-p", "$PORT" ]

EXPOSE 3000

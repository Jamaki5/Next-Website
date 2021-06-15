# Naively Simple Node Dockerfile

FROM node:14.17-alpine as builder

WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM node:14.17-alpine

WORKDIR /usr/app
COPY --from=builder /usr/app/.next ./.next
COPY ./package*.json ./
COPY ./public ./public
RUN npm install --production

USER node

EXPOSE 3000

CMD ["npm", "run", "start"]


### BUILD
FROM node:16.13-bullseye AS build-env

WORKDIR /tmpdir

COPY . .

#RUN npm install -g yarn

RUN yarn install

RUN yarn build

#### LIVE
FROM nginx:latest

EXPOSE 8080


COPY --from=build-env /tmpdir/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]


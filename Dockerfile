### BUILD
FROM node:lts-bullseye AS build-env

WORKDIR /tmpdir

COPY . .

RUN npm install

RUN npm run build

#### LIVE
FROM nginx:latest

EXPOSE 8080


COPY --from=build-env /tmpdir/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]


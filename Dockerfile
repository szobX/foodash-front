FROM node:lts-bullseye AS build-env

WORKDIR /tmpdir
RUN npm install

RUN npm run build

FROM nginx:latest

EXPOSE 8080


COPY --from=build-env /tmpdir/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]


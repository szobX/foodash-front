FROM node:16-bullseye-slim

RUN apt update

RUN apt install nginx -y

COPY . .

RUN npm install

RUN npm run build

COPY dist/* /var/www/html/*

CMD ["nginx", "-g", "daemon off;"]

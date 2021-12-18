FROM node:16

# Copy everything to app

COPY ./ App/

WORKDIR /App

RUN npm install

ENTRYPOINT [ "npm", "run", "build" ] 
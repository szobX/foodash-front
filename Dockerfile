FROM node:16

# Copy everything to app

COPY ./ App/

WORKDIR /App

RUN npm install
RUN npm run build

ENTRYPOINT [ "npm", "run", "dev"] 

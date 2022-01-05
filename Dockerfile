FROM nginx:latest

EXPOSE 8080

COPY ./dist/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]


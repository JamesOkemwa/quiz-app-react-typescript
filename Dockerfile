FROM node:14.17.3-buster as build

# create a folder
WORKDIR /web

COPY package.json package.json
COPY package-lock.json package-lock.json

# install dependencies
RUN npm ci --production

# copy every file or source code from the local directory into the working directory
COPY . .

RUN npm run build

# NGINX Web Server

FROM nginx:1.12-alpine as prod 

COPY --from=build /web/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
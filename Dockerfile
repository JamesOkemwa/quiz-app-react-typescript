FROM node:14.17.3-buster

# create a folder
WORKDIR /web

COPY package.json package.json
COPY package-lock.json package-lock.json

# install dependencies
RUN npm install

# copy every file or source code from the local directory into the working directory
COPY . .

CMD ["npm", "run", "start"]
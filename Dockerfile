# FROM node:14
# FROM node:14.0-stretch-slim
FROM node:14-alpine
#FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# COPY sdsmain.js .
# COPY sdsmodules.js .
# COPY app.log .

# Install app dependencies
# A wildcard is used to ensure both package.js
# on AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# install all dependencies as defined is package.json
RUN npm install
# RUN curl install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .
# COPY ./private/webapp.json ./private/webapp.json
COPY ./public/images/logo.jpg /public/images/logo.jpg
COPY ./private/webapp.json /private/webapp.json

# Expose http port
EXPOSE 8090

# HEALTHCHECK --interval=5s  CMD curl --fail http://127.0.0.1:8090 || exit 1

# Start & Run the NodeJS pp
CMD ["node", "index.js"]
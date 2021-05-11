FROM node:16.1.0-slim

WORKDIR /bolt-learn

COPY . /bolt-learn/
RUN npm install

CMD node app.js

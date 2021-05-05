FROM node:10
WORKDIR /belajar
COPY package.json /belajar
RUN npm install
COPY . /belajar
CMD node index.js
EXPOSE 3000
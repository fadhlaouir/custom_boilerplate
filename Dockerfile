FROM node:10

EXPOSE 5004

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm test -- -u

ENTRYPOINT [ "npm", "run", "start:prod"]

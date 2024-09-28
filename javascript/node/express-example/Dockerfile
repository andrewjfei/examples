FROM node:22-alpine

# install bash
RUN apk add --no-cache bash curl

WORKDIR /express-example

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

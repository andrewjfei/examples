# use node image from docker hub <image:tag>
FROM node:22-alpine

# set the working directory in the container
WORKDIR /docker-example

# copy package.json and package-lock.json to working directory in container
COPY package*.json ./

# install dependencies
RUN npm install

# copy rest of application to working directory in container (seperate step 
# from previous copy to utilise layer caching)
COPY . .

# expose port 3000 (i.e. document port application is running on)
EXPOSE 3000

# start the express server
CMD ["npm", "run", "dev"]

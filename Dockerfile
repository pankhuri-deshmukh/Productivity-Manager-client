FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]


#to run the docker file run - "docker run -p 3000:3000 productivity-manager-client"

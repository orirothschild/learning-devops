FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

# Install application dependencies
RUN npm install

COPY . .

EXPOSE 3000

# Start the application
CMD [ "node", "backend-server.js" ]

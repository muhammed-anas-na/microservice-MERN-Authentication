FROM node:18.16.0

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 8003
CMD [ "node","index.js" ]

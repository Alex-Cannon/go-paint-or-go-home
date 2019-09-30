FROM node:alpine
WORKDIR /app
ENV HOST_IP 0.0.0.0
COPY .env.template .env
COPY . .
CMD npm install && npm start
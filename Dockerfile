#parent image
FROM node:lts
WORKDIR /app
COPY . /app
RUN npm install nodemon -g
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]

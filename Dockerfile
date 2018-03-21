FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY clientinfo.js /app
CMD ["node","clientinfo.js"]
EXPOSE 8080

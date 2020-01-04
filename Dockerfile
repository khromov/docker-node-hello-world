FROM node:12-alpine
COPY . /src
RUN cd /src && npm install
VOLUME /node-data
EXPOSE 4000
CMD ["node", "/src/server.js"]

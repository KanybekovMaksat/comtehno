FROM node:20.11.1-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install serve -g
COPY . .
RUN npm run build
EXPOSE 3000

CMD ["cp", "-r", "/app/dist/.", "/frontend_static/"]
CMD ["npm", "run", "serve"]

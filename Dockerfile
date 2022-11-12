
FROM node:16-alpine 
# tes
WORKDIR /app

COPY . .

RUN npm ci 

RUN npm install

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000
CMD [ "npm","start" ]
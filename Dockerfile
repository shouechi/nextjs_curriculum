FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache git

CMD ["npm", "run", "dev"]
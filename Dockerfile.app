FROM node:20

WORKDIR /app

COPY package*.json ./

RUN yarn --frozen-lockfile

COPY ["src", ".env", "./"]

EXPOSE 3000

CMD [  "yarn", "start:dev" ]

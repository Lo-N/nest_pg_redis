FROM node:20

WORKDIR /app

COPY package*.json ./

RUN yarn --frozen-lockfile

COPY ["src", "db", ".env", "./"]

EXPOSE 3000

CMD [  "yarn", "migrate_and_run" ]

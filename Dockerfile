FROM node:18-bullseye as web

WORKDIR /app

COPY . ./

RUN apt update && apt install --no-install-recommends -y tini
RUN su node -c "npm install -g @nestjs/cli"
RUN yarn install
RUN yarn build
RUN rm -rf .git

ENTRYPOINT ["/usr/bin/tini", "--"]
CMD yarn start
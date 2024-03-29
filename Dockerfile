FROM node:18-bullseye as builder

WORKDIR /app

COPY . ./

RUN npm install -g @nestjs/cli
RUN yarn install
RUN yarn build
RUN rm -rf .git

FROM node:18-bullseye-slim as runner

WORKDIR /app

RUN apt update && apt install --no-install-recommends -y tini

ENTRYPOINT ["/usr/bin/tini", "--"]

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/packages/client/built ./packages/client/built
COPY --from=builder /app/packages/backend/node_modules ./packages/backend/node_modules
COPY --from=builder /app/packages/backend/dist ./packages/backend/dist
COPY --from=builder /app/packages/backend/prisma ./packages/backend/prisma
COPY --from=builder /app/packages/backend/package.json ./packages/backend/package.json
COPY --from=builder /app/packages/backend/tsconfig.build.json ./packages/backend/tsconfig.build.json

CMD yarn migrateandstart

FROM node:18

WORKDIR /app

ARG LISTEN_PORT=3000

COPY . .

RUN npm ci && npm run build && npm prune --production

EXPOSE ${LISTEN_PORT}

CMD ["npm", "run", "start:prod"]

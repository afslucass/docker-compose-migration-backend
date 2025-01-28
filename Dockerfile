FROM node:18-alpine
WORKDIR /app
COPY . .
RUN corepack enable
RUN yarn install
CMD ["sleep", "infinity"]
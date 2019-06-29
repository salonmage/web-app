FROM node:10.16-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:production

FROM nginx:1.17-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf
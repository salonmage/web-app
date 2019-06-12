FROM node:10.16-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.17-alpine
COPY --from=builder /app/build /usr/share/nginx/html


#build state for building frontend assets

FROM node:alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build

#nginx state for serving content

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .
# Containers run nginx with global directives an daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# docker build -t selenasiri/artist:1.0 .
# docker login -u "selenasiri"
# docker push selenasiri/artist:1.0
# docker run --rm -it -p 8080:80 selenasiri/artist:1.0

# Navigate to http://localhost:8080, and you should now see our default app!
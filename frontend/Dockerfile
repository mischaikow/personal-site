# =================>>  The build image
FROM node:lts-alpine@sha256:fb6cb918cc72869bd625940f42a7d8ae035c4e786d08187b94e8b91c6a534dfd AS build

WORKDIR /app
COPY package*.json ./

RUN npm ci --only=production
COPY . ./
RUN npm run build

# =================>>  The build image
FROM nginx:mainline-alpine@sha256:ad14f3471c0fd650022d3d2ff370e02c51113679070486e510dfcbe64d00565a

COPY ./nginx/nginx.conf /etc/nginx/conf.d/www.mischaikow.com.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]

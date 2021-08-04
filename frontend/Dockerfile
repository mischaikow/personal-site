# =================>>  The build image
FROM node:lts-alpine AS build

WORKDIR /app
COPY package*.json ./

RUN npm ci --only=production
COPY . ./
RUN npm run build

# =================>>  The build image
FROM nginx:mainline

COPY ./nginx/nginx.conf /etc/nginx/conf.d/www.mischaikow.com.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]

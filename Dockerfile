FROM docker-registry.default.svc:5000/epos/node:12-alpine
WORKDIR /src

COPY package.json ./

RUN yarn install --development

COPY . .

RUN yarn build

# Using nginx to serve front-end
FROM docker-registry.default.svc:5000/epos/nginx:1.14.2

EXPOSE 8080

WORKDIR /var/www/html

# Copy built artifacts
COPY --from=0 /src/build/ ./

# Copy nginx configuration folder
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/conf.d/ /etc/nginx/conf.d/

FROM docker-registry.default.svc:5000/epos/node:12 as node-dev

WORKDIR /src

COPY package.json ./

RUN  yarn install --development

COPY . .

RUN yarn build

# Using nginx to serve front-end
FROM docker-registry.default.svc:5000/epos/bitnaminginx:1.14.2

EXPOSE 8080

WORKDIR /var/www/html

# Copy built artifacts
COPY --from=node-dev /src/build/ ./

# Copy nginx configuration folder
COPY ./nginx/conf.d/ /opt/bitnami/nginx/conf/vhosts/

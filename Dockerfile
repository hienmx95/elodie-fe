FROM docker-registry.default.svc:5000/epos/nodejs-010-centos7
WORKDIR /src

COPY package.json ./

RUN  npm install --development

COPY . .

RUN npm build

# Using nginx to serve front-end
FROM docker-registry.default.svc:5000/epos/nginx:1.14.2

EXPOSE 8080

WORKDIR /var/www/html

# Copy built artifacts
# COPY --from=node-dev /src/build/ ./

# Copy nginx configuration folder
COPY ./nginx/conf.d/ /opt/bitnami/nginx/conf/vhosts/

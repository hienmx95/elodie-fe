FROM docker.io/openshift/nodejs-010-centos7 as node-dev

WORKDIR /src

COPY package.json .npmrc ./

RUN  yarn install --development

COPY . .

RUN yarn build

# Using nginx to serve front-end
FROM docker-registry.default.svc:5000/default/nginx:1.14.2

EXPOSE 8080

WORKDIR /var/www/html

# Copy built artifacts
COPY --from=node-dev /src/build/ ./

# Copy nginx configuration folder
COPY ./nginx/conf.d/ /opt/bitnami/nginx/conf/vhosts/

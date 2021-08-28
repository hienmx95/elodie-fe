FROM docker-registry.default.svc:5000/default/openshift-nodejs

WORKDIR /src

COPY package.json .npmrc ./

RUN  yarn install --development

COPY . .

RUN yarn build

# Using nginx to serve front-end
FROM docker-registry.default.svc:5000/default/openshift-nginx

EXPOSE 8080

WORKDIR /var/www/html

# Copy built artifacts
# COPY --from=node-dev /src/build/ ./

# Copy nginx configuration folder
COPY ./nginx/conf.d/ /opt/bitnami/nginx/conf/vhosts/

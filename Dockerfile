FROM docker-registry.default.svc:5000/elodie/node:12 as node-dev
WORKDIR /src

COPY package.json ./

RUN yarn install --development

COPY . .

RUN yarn build

# Using nginx to serve front-end
FROM nginxinc/nginx-unprivileged

EXPOSE 8080

WORKDIR /var/www/html

# Copy built artifacts
COPY --from=node-dev /src/build/ ./

# Copy nginx configuration folder
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/conf.d/ /etc/nginx/conf.d/

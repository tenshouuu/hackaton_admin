RUN mkdir -p /home/deploy/hackaton_admin

WORKDIR /home/deploy/hackaton_admin

COPY package.json yarn.lock ./
RUN yarn

COPY . ./
RUN yarn build

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn

COPY ./build/ /var/www

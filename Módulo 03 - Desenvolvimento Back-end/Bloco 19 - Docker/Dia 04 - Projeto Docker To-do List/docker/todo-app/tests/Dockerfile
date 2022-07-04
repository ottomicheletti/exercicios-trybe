FROM mjgargani/puppeteer:trybe1.0

WORKDIR /app

COPY package*.json ./

RUN npm install

ADD node_modules.tar.gz ./app/node_modules

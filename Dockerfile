FROM codeception/codeceptjs
   
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app



FROM codeception/codeceptjs
# RUN apt-get update && apt-get install -y wget --no-install-recommends \
#     && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
#     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
#     && apt-get update \
#     && apt-get install -y google-chrome-unstable \
#       --no-install-recommends \
#     && apt-get install -y libgbm1 \
#     && rm -rf /var/lib/apt/lists/* \
#     && apt-get purge --auto-remove -y curl \
#     && rm -rf /src/*.deb
   
WORKDIR /app

COPY package.json /app
RUN npm install




COPY . /app

# RUN chown -R pptruser:pptruser /app
# RUN runuser -l pptruser -c 'npm install --loglevel=warn --prefix /app'

RUN npx codeceptjs run --steps


FROM node:7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN rm -rf node_modules
RUN npm install phantomjs

RUN apt-get update && apt-get install -y curl xvfb chromium

ADD xvfb-chrome /usr/bin/xvfb-chrome
RUN ln -s /usr/bin/xvfb-chrome /usr/bin/google-chrome
RUN chmod 755 /usr/bin/xvfb-chrome
RUN ln -s /usr/bin/xvfb-chrome /usr/bin/chromium-browser

RUN npm install -g @angular/cli

RUN npm install -g phantomjs

RUN npm install

ENV CHROME_BIN="/usr/bin/google-chrome"
# Get all the code needed to run the app
COPY . /usr/src/app

#expose ui
EXPOSE 9100 4200 9876

# Serve the app
CMD ["ng", "test"]
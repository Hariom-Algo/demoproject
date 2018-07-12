FROM node:7

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN rm -rf node_modules
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

#expose ui
EXPOSE 9100 4200

# Serve the app
CMD ["npm", "start"]
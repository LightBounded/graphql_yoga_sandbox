FROM node:18 

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build


# Expose port 4000
EXPOSE 4000

# Run the app
CMD [ "npm", "start" ]
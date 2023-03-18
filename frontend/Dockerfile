FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install 
RUN npm install react-scripts@5.0.1 -g 
#RUN npm uninstall eslint-config-react-app && npm install eslint-config-react-app --save-dev

# Copy the rest of the app files to the container
COPY . .

# Build the app
#RUN npm run build
RUN ls /app/

# Expose the port that the app runs on
RUN npm run build

RUN npm install -g serve
EXPOSE 3000

# Start the app
CMD [ "serve", "-s","build" ]     

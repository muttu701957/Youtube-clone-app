# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Accept build arg
ARG REACT_APP_RAPID_API_KEY

# Set environment variable
ENV REACT_APP_RAPID_API_KEY=$REACT_APP_RAPID_API_KEY

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app with env
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]


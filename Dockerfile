# Use a lighter version of Node as a parent image
FROM node:10
# Copy the current directory contents into the container at /api
COPY . /api
# Set the working directory to /api
WORKDIR /api
# copy package.json into the container at /api
COPY package*.json /api/
# install dependencies
RUN npm install
# Make port 8080 available to the world outside this container
EXPOSE 8080
# Run the app when the container launches
CMD npm start

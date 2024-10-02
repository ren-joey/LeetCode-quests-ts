FROM node:20-alpine

RUN apk update

# check Node.js version
RUN node -v

# set the working directory
WORKDIR /usr/quests

# copy files into working directory
COPY . .

# set default command
CMD ["bash"]

# install npm requirements
RUN npm install
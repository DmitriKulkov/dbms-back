FROM node:latest
WORKDIR /dbms_back/
COPY package*.json /dbms_back/
RUN npm install
COPY . /dbms_back/

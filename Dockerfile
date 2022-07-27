FROM node:latest
WORKDIR /db_lab_back/
COPY package*.json /db_lab_back/
RUN npm install
COPY db_lab_back /db_lab_back/
#EXPOSE 3000
#CMD ["npm", "run", "start"]

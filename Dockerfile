FROM nikolaik/python-nodejs:python3.10-nodejs20-bullseye
# Install Python and pip

COPY /frontend/package*.json ./
RUN npm install 

WORKDIR /app

COPY . .
#RUN pip install tzdata --upgrade
RUN pip3 install -r backend/requirements.txt

RUN python backend/manage.py makemigrations

RUN python backend/manage.py migrate





EXPOSE 3000

EXPOSE 5000

RUN pwd

CMD python backend/manage.py runserver 0.0.0.0:5000 & npm --prefix ./frontend start

# # Start the application
# CMD ["npm", "--prefix" ,"./frontend" ,"start"]

FROM  node:16-alpine

# Install Python and pip

RUN apk add --no-cache python3

RUN apk add --no-cache py3-pip


COPY /frontend/package*.json ./
RUN npm install 

WORKDIR /app

COPY . .
RUN pip install tzdata --upgrade
RUN pip3 install -r backend/requirements.txt

RUN python backend/manage.py makemigrations

RUN python backend/manage.py migrate





EXPOSE 3000

EXPOSE 5000

RUN pwd

CMD python backend/manage.py runserver 0.0.0.0:5000 & npm --prefix ./frontend start

# # Start the application
# CMD ["npm", "--prefix" ,"./frontend" ,"start"]

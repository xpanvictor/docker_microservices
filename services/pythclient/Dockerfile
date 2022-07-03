FROM python:3.7-alpine

RUN mkdir /app
WORKDIR /app

ADD requirements.txt .
COPY . .

RUN pip3 install -r requirements.txt
CMD ["gunicorn", "-w 4", "-b", "0.0.0.0:5000", "app:app"]
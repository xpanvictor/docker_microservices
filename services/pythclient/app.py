import os.path as pathaway
from flask import Flask, render_template, send_from_directory
app = Flask(__name__)

root = pathaway.join(pathaway.abspath(''), 'public')


@app.route("/file/<file_name>")
def func(file_name):
    return send_from_directory(root, file_name)


@app.route("/")
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)

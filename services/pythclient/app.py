import os.path as pathaway
from flask import Flask, jsonify, render_template, send_from_directory, make_response
app = Flask(__name__)

root = pathaway.join(pathaway.abspath(''), 'public')


def pathjoin(dir, new):
    return pathaway.join(dir, new)


@app.route("/styles/<file_name>")
def style(file_name):
    return send_from_directory(pathjoin(root, 'styles'), file_name)


@app.route("/scripts/<file_name>")
def script(file_name):
    return send_from_directory(pathjoin(root, 'scripts'), file_name)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/vote")
def vote():
    return render_template('voter.html')


@app.route("/vote/<choice>")
def choice(choice):
    data = jsonify(choice)
    res = make_response(data)
    res.set_cookie('voted', True)
    return res


if __name__ == '__main__':
    app.run(debug=True)

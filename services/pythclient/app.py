from flask import Flask
app = Flask(__name__)


@app.route("/")
def index():
    return '<h1>Hello world</h1><p>Xpan with python server</p>'


if __name__ == '__main__':
    app.run(debug=True)

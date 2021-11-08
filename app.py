from flask import Flask, jsonify
from flask.helpers import send_from_directory

# Location for index.html
app = Flask(__name__, static_folder="frontend/build", static_url_path="")

# comment out when building for server
#from flask_cors import CORS
#CORS(app)

# Get the name from the url and return the output
@app.route('/dashboard/<string:name>',methods=['GET'])
def output_name(name):  # put application's code here
    if name=='John':
        return jsonify(
            status=200,
            message="Wright"
        )
    else:
        return jsonify(
            status=404,
            message="User Not Found"
        )

# Starting route for index
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == '__main__':
    app.run(host="0.0.0.0")
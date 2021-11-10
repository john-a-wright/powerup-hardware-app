from flask_cors import CORS
from flask import Flask, jsonify, request
from flask.helpers import send_from_directory

# Location for index.html
app = Flask(__name__, static_folder="frontend/build", static_url_path="")

# comment out when building for server
CORS(app)

# Get the name from the url and return the output


@app.route('/api/dashboard/<string:name>', methods=['GET'])
def output_name(name):
    if name == 'John':
        return jsonify(
            status=200,
            message="Wright"
        )
    else:
        return jsonify(
            status=404,
            message="User Not Found"
        )

# return hardware sets
@app.route('/api/dashboard/hardware', methods=['GET'])
def get_sets():
    return jsonify(
        status=200,
        message="test hardware set"
    )


# return user projects
@app.route('/api/dashboard/projects', methods=['GET'])
def get_projects():
    return jsonify(
        status=200,
        message="test project"
    )


# join project
@app.route('/api/dashboard/projects/join', methods=['POST'])
def join_projects():
    try:
        print(request.json)
        id = request.json["projectid"]
        user = request.json["user"]
        print(f'user creating project with id: {id} by user: {user}')

        return jsonify(
            status=200,
            message="joined project " + id + " by user " + user
        )

    except Exception as e:
        print(e)
        return str(e)


# Starting route for index
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


if __name__ == '__main__':
    app.run(host="0.0.0.0")

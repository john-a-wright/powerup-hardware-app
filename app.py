#from flask_cors import CORS
from flask import Flask, jsonify, request
from flask.helpers import send_from_directory

from pymongo import MongoClient
#import ssl
import os

# Location for index.html
app = Flask(__name__, static_folder="frontend/build", static_url_path="")

# comment out when building for server
#CORS(app)


# Get MongoDB client
mongo_uri = os.environ['MONGODB_URI']
#mongo_uri = "mongodb+srv://powerup:fig@cluster0.oemnt.mongodb.net/powerup-hardware?retryWrites=true"
mongoClient = MongoClient(mongo_uri)
#mongoClient = MongoClient(mongo_uri,ssl_cert_reqs=ssl.CERT_NONE)

# Get HWSet1 database
powerup_db = mongoClient.get_database('powerup-hardware')
hw_sets_col = powerup_db.get_collection("hw-sets")

# Get projects database
powerup_db = mongoClient.get_database('powerup-hardware')
projects_col = powerup_db.get_collection("projects")



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
    set1 = hw_sets_col.find_one({"name": "set1"})
    print('SHOULD BE NAME HERE: ' + set1['name'])
    return jsonify(
        status=200,
        message=[set1['name']]
    )



# return user projects
@app.route('/api/dashboard/projects/<string:email>', methods=['GET'])
def get_projects(email):

    #print("user email tring to get projects: " + email)

    projects = []

    for p in projects_col.find():
        for user in p["users"]:
            if user == email:
                p_dict = {  'id' : p['id'],
                            'name' : p['name'],
                            'description' : p['description'],
                            'checkedOutHW' : p['checkedOutHW'],
                            'users' : p['users']
                            }
                projects.append(p_dict)

    return jsonify(
        status=200,
        userProjects=projects
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

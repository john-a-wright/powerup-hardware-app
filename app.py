#from flask_cors import CORS
from flask import Flask, jsonify, request
from flask.helpers import send_from_directory

from pymongo import MongoClient

# DONT FORGET TO EDIT .ENV BEFORE NPM RUN BUILD

# DONT NEED SSL FOR SERVER BUT DO NEED OS

#import ssl
import os

# Location for index.html
app = Flask(__name__, static_folder="frontend/build", static_url_path="")

# comment out when building for server
#CORS(app)


# Get MongoDB client

# HEROKU
mongo_uri = os.environ['MONGODB_URI']
mongoClient = MongoClient(mongo_uri)

# CLIENT SIDE
#mongo_uri = "mongodb+srv://powerup:fig@cluster0.oemnt.mongodb.net/powerup-hardware?retryWrites=true"
#mongoClient = MongoClient(mongo_uri,ssl_cert_reqs=ssl.CERT_NONE)


# Get database
powerup_db = mongoClient.get_database('powerup-hardware')

# Get HWSet1 collection
hw_sets_col = powerup_db.get_collection("hw-sets")

# Get projects collection
projects_col = powerup_db.get_collection("projects")

# Get global variables collection
global_var_col = powerup_db.get_collection("global-variables")

# define for the mongodb id that corresponds to the id counting variable
project_id_counter_objectid = "618c24d098d337aed1695941"

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

# create project
@app.route('/api/dashboard/projects/create', methods=['POST'])
def create_projects():
    try:
        print(request.json)

        for p in projects_col.find():
            if int(p["id"]) == int(request.json["id"]):
                return jsonify(
                    status=-1,
                    error="Project ID has already been used"
                )

        newProject = {
            "id" : request.json["id"],
            "name" : request.json["name"],
            "description" : request.json["description"],
            "checkedOutHW" : [],
            "users" : [request.json["user"]]
        }

        #print(f'newProject: {newProject}')

        projects_col.insert_one(newProject)
        #print(projects_col.find_one({"id":request.json["id"]}))

        user = request.json["user"]
        id = str(request.json["id"])
        print(f'created project with id: {id} by user: {user}')

        newProject.pop("_id")
        #print(newProject)

        return jsonify(
            status=200,
            newlyCreatedProject = newProject  
        )

    except Exception as e:
        print(e)
        return str(e)

# join project
@app.route('/api/dashboard/projects/join', methods=['POST'])
def join_projects():
    try:
        print(request.json)
        id = request.json["projectid"]
        email = request.json["user"]
        print(f'user joining project with id: {id} by user: {email}')

        oldUsers = []

        for p in projects_col.find():
            if int(p["id"]) == int(request.json["projectid"]):
                for user in p["users"]:
                    if user == email:
                        return jsonify(
                            status=-1,
                            error="Already in Project"
                        )
                oldUsers = p["users"]
                print(f'OLD USERS: {oldUsers}')
                oldUsers.append(email)
                # add user to project
                print(f'NEW USERS: {oldUsers} with an id of {p["id"]}')
                projects_col.update_one({ "id" : p["id"] },{ "$set": { "users": oldUsers } })

                p_dict = {  'id' : p['id'],
                            'name' : p['name'],
                            'description' : p['description'],
                            'checkedOutHW' : p['checkedOutHW'],
                            'users' : p['users']
                            }

                return jsonify(
                    status=200,
                    newlyJoinedProject = p_dict
                )


        return jsonify(
            status=-1,
            error="No project with that ID"
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

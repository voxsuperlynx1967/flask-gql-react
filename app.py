from flask import Flask, request, jsonify
from ariadne import graphql_sync, make_executable)schema, gql, load_schema_from_path
from  araidne.constants import PLAYGROUND_HTML
#playground is useful for development, writing testing and learning about our graphql API

app = Flask(__name__)

@app.route("/")
def hello():
     return 'Hello, World!'

if __name__ =='__main__':
        app.run()

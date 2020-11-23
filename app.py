from flask import Flask, request, jsonify
from ariadne import graphql_sync, make_executable)schema, gql, load_schema_from_path
from ariadne.constants import PLAYGROUND_HTML
from model.py import query
type_defs = gql(load_schema_from_path("./schema.graphql"))
#load schema to create type definition, gql validates the schema and lets us know if anything is wrong
schema = make_executabel_schema(type_defs, query)
#we make it executable by combining the type definiton with query, our resolvers for all queries
#playground is useful for development, writing testing and learning about our graphql API

app = Flask(__name__)

# @app.route("/")
# def hello():
#      return 'Hello, World!'

@app.route("/graphql". methods=["GET"])
def graphql_playground():
    return PLAYGROUND_HTML, 200

if __name__ =='__main__':
        app.run()

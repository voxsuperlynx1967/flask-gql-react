from flask import Flask, request, jsonify
from ariadne import graphql_sync, make_executable_schema, gql, load_schema_from_path
from ariadne.constants import PLAYGROUND_HTML
from model import query, mutation
type_defs = gql(load_schema_from_path('./schema.graphql'))

# load schema to create type definition, gql validates the schema and lets us know if anything is wrong

schema = make_executable_schema(type_defs, query, mutation)
#we make it executable by combining the type definiton with query, our resolvers for all queries
#playground is useful for development, writing testing and learning about our graphql API

app = Flask(__name__)

# @app.route("/")
# def hello():
#      return 'Hello, World!'


@app.route("/graphql", methods=["GET"])
def graphql_playground():
    """Serve GraphiQL playground"""
    return PLAYGROUND_HTML, 200

@app.route("/graphql", methods=["POST"])
def graphql_server():
    data = request.get_json()

    success, result = graphql_sync(
        schema,

        data,
        #pass the json into graphql sync along with schema
        context_value=request,
        # we do this just in case we want to make use of something outside of the query, within a resolver
        debug=app.debug

    )

    status_code = 200 if success else 400
    return jsonify(result), status_code

if __name__ =='__main__':
        app.run(debug=True)

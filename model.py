from ariadne import QueryType
from uuid import uuid4
query = QueryType()

# @query.field("hello")
# def resolve_hello(_, info):
#     return "Hi there"

class Beer:
    def __init__(self, size, name, beer_type):
        self.size = size
        self.name = name
        self.type = beer_type
        self.id = uuid4()

orders = []

@query.field("orders")
def resolve_orders(_, info):
    return orders

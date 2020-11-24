from ariadne import QueryType, MutationType
from uuid import uuid4
query = QueryType()
mutation = MutationType()

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

@mutation.field("orderBeer")
def resolver_order_beer(_, info, size, name, type):
    newOrder = Beer(size, name, type)
    orders.append(newOrder)
    return newOrder

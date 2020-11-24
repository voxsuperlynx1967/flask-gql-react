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
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }

orders = []

@query.field("orders")
def resolve_orders(_, info):
    return orders

@mutation.field("orderBeer")
def resolver_order_beer(_, info, size, name, type):
    newOrder = Beer(size, name, type)
    orders.append(newOrder)
    print(newOrder.id)
    return newOrder

@mutation.field("removeBeer")
def resolver_remove_beer(_, info, id):
    removed = False
    def find(arr, id):
        for x in arr:
            if str(x.id) == str(id):
                return x
    d = find(orders, id)
    orders.remove(d)
    if d not in orders:
        removed = True

    return {
        "removed": removed
    }

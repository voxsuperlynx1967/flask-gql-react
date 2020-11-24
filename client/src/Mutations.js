const orderBeer = (size, name, type, cb) => {
    fetch(`/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {
          orderBeer(size: ${size}, name: "${name}", type: ${type}) {
            id
            name
            type
            size
          }
        }`,
      }),
    })
      .then(res => res.json())
      .then(res => cb(res.data))
      .catch(console.error)
  }

const removeBeer = (id, cb) => {
    fetch(`/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `mutation {
          removeBeer(id: "${id}") {
            removed
          }
        }`,
      }),
    })
      .then(res => res.json())
      .then(res => cb(res.data))
      .catch(console.error)
  }

export { orderBeer, removeBeer }

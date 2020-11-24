export default function getOrders(cb) {
    fetch(`/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
          orders {
            id
            name
            type
            size
          }
        }`,
      }),
    })
      .then(res => res.json())
      .then(res => cb(res.data.orders))
      .catch(console.error)
  }

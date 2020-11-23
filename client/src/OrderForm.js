import React, { useState } from "react"
export default function OrderForm() {

    const [order, setOrder] = useState({
        size: "HALF_PINT",
        type: "PILSNER",
        name: "",
    })

    function handleSubmit(e) {
        e.preventDefault()

        orderBeer(order.size, order.name, order.type, ({orderBeer}) => {
            setMyOrders([...myOrders, orderBeer])
        })
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <label>
                    Size:
                    <select
                        onChange = {e => setOrder({...order, size: e.target.value})}>
                        <option>

                        </option>
                        <option>

                        </option>
                        </select>
                </label>
                <label>
                    Name
                     <input
                        type="text"
                        onChange=  {e => setOrder({...order, name: e.target.value})}></input>
                </label>
                <label>
                    Type:
                    <select
                    onChange={e => setOrder({...order, type: e.target.value})}
                    >

                    <option>
                    </option>
                    <option></option>
                </select>
                </label>
                <input type="submit" value="Order Beer" />
            </form>
        </div>
    )
}

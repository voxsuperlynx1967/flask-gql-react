import React, { useState } from "react"
import orderBeer from "./Mutations"
import getOrders from "./Queries"
export default function OrderForm(myOrders, setMyOrders ) {

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
                    Name
                     <input
                        type="text"
                        onChange=  {e => setOrder({...order, name: e.target.value})}></input>
                </label>
                <label>
                    Size
                    <select
                        onChange = {e => setOrder({...order, size: e.target.value})}>
                        <option value="HALF_PINT" defaultValue>
                            Half Pint
                        </option>
                        <option value="PINT" defaultValue>
                            Pint
                        </option>
                        </select>
                </label>
                <label>
                    Type
                    <select
                    onChange={e => setOrder({...order, type: e.target.value})}
                    >

                    <option value="PILSNER" defaultValue>
                        Pilsner
                    </option>
                    <option value="IPA" defaultValue>
                        IPA
                    </option>
                    <option value="STOUT" defaultValue>
                        Stout
                    </option>
                </select>
                </label>
                <input className="submit" type="submit" value="Order Beer" />
            </form>
        </div>
    )
}

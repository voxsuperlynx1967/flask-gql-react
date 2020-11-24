import React, { useState } from "react"
import './order.css'
import CancelIcon from '@material-ui/icons/Cancel';
const { orderBeer, removeBeer } = require("./Mutations.js")
export default function Order(order) {
    const handleDelete = () => {
        removeBeer(String(order.id))
    }
    return (
        <div className="order" id={order.id}>
            <div className="delete">
                <CancelIcon className="delete" onClick={handleDelete}>Remove Order</CancelIcon>
            </div>
            <div className="name">
             {order.name}
            </div>
            <div className="info">
            {order.size[0] + order.size.substring(1).split("_").join(" ").toLowerCase()} of {order.type[0] + order.type.substring(1).split("_").join("").toLowerCase()}
            </div>
        </div>
    )

}

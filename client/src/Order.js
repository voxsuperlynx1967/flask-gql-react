import React, { useState } from "react"
import './order.css'
export default function Order(order) {
    return (
        <div className="order" id={order.id}>
            <div className="name">
             {order.name}
            </div>
            <div className="info">
            {order.size.toLowerCase()}{" "} of {order.type.split("_").join(" ").toLowerCase()}
            </div>
        </div>
    )

}

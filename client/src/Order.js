import React, { useState } from "react"
import './order.css'
export default function Order(order) {
    return (
        <div className="order" id={order.id}>
            <div className="name">
             {order.name}
            </div>
            <div className="info">
            {order.size[0] + order.size.substring(1).split("_").join(" ").toLowerCase()} of {order.type[0] + order.type.substring(1).split("_").join("").toLowerCase()}
            </div>
        </div>
    )

}

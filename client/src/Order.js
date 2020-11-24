import React, { useState } from "react"
export default function Order(order) {
    return (
        <div id={order.id}>
            <div>
             {order.name}
            </div>
            <div>
            {order.size.toLowerCase()}{" "} of {order.type.split("_").join(" ").toLowerCase()}
            </div>
        </div>
    )

}

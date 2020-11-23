import React, { useState } from "react"
export default function Order(order) {
    <li id={order.id}>
        {order.name} - {order.size.toLowerCase()}{" "}
            {order.type.split("_").join(" ").toLowerCase()}
    </li>
}

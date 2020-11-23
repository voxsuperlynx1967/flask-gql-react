import logo from './logo.svg';
import './App.css';
import OrderForm from "./OrderForm"
import Order from "./Order"
import React, { useState } from "react"

function App() {

const [myOrders, setMyOrders] = useState([])
const renderOrders = () => {
    let list1 = []
    for (const ele of myOrders) {
        list1.push(
            Order(ele)
        )
    }
    return list1
}
  return (
    <div className="App">
      <header className="App-header">
      <OrderForm/>
      <ul>
        {renderOrders()}
      </ul>
      </header>


    </div>
  );
}

export default App;

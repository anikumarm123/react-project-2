import React, { useState } from "react";
import "./cartitem.css";
import ItemList from "./ItemList";
import OrderItems from "./OrderItems";

function CartItem() {
  const [item, setItem] = useState([
    { name: "Dhosai", image: require("../image/item-1.jpg"), qt: 1 },
    { name: "Dhosai", image: require("../image/item-2.jpg"), qt: 1 },
    { name: "Dhosai", image: require("../image/item-3.jpg"), qt: 1 },
    { name: "Dhosai", image: require("../image/item-4.webp"), qt: 1 },
    { name: "Dhosai", image: require("../image/item-5.jpg"), qt: 1 },
    { name: "Dhosai", image: require("../image/item-6.jpg"), qt: 1 },
  ]);
  const [order, setOrder] = useState([]);

  const orderfun = (eachItem) => {
    const check = order.includes(eachItem);

    if (check === false) {
      setOrder([...order, eachItem]);
      console.log(order);
    } else {
      
      
    }
  };
  return (
    <div className="main">
      <div className="listitem">
        {item.map((foodName, ind) => (
          <ItemList items={foodName} key={ind} order={orderfun} />
        ))}
      </div>
      <div>
        {order.map((eachfoods, ind) => (
          <OrderItems key={ind} each={eachfoods} />
        ))}
      </div>
    </div>
  );
}

export default CartItem;
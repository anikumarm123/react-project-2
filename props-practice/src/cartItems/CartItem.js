import React, { useState } from "react";
import "./cartitem.css";
import ItemList from "./ItemList";
import OrderItems from "./OrderItems";

function CartItem() {
  const [item, setItem] = useState([
    {id:1, name: "Dhosai", image: require("../image/item-1.jpg")},
    {id:2, name: "Dhosai", image: require("../image/item-2.jpg")},
    {id:3, name: "Dhosai", image: require("../image/item-3.jpg")},
    {id:4, name: "Dhosai", image: require("../image/item-4.webp")},
    {id:5, name: "Dhosai", image: require("../image/item-5.jpg")},
    {id:6, name: "Dhosai", image: require("../image/item-6.jpg")},
  ]);
  const [order, setOrder] = useState([]);

  const orderfun = (eachItem) => {
    const check = order.some((data)=> data.id === eachItem.id )
    console.log(check);
    if(check){
       const checkItem = order.map((item)=>{
        if(eachItem.id == item.id){
             return {...item,qty:item.qty+1}
        }
        else{
          return item
        }
       })
       setOrder([...checkItem])
    }
    else{
      setOrder([...order,{...eachItem,qty:1}])
    }
  };
  const removeItem =(data)=>{
    const remove = order.filter((item)=>{
         return item !== data
     })
     console.log(remove);
     setOrder(remove)
  }
  
  const decreament =(data)=>{
    if(data.qty > 1){
    const checkItem = order.map((item)=>{
      if(data.id == item.id){
           return {...item,qty:item.qty-1}
      }
      else{
        return item
      }
     })
     setOrder([...checkItem])   
    }
    else{
        removeItem(data)
    }
  }
  return (
    <div className="main">
      <div className="listitem">
        {item.map((foodName, ind) => (
          <ItemList items={foodName} key={ind} order={orderfun} />
        ))}
      </div>
      <div>
        <h1>Order  Items</h1>
        {order.map((eachfoods, ind) => (
          <OrderItems key={ind} each={eachfoods} removeBtn ={removeItem} plusBtn ={orderfun} minusBtn={decreament}/>
        ))}
      </div>
    </div>
  );
}

export default CartItem;

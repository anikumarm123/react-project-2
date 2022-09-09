import React, { useEffect, useState } from "react";
import axios from "axios";
import "./test.css"
import { CartItem } from "./cartItem";
export const ListItem = () => {
  const [listitem, setListItem] = useState([]);
  const [cartItem,setCartItem]=useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const getItems = await axios.get(
      "http://nammacart-dev-lb-1671514857.ap-south-1.elb.amazonaws.com:8080/products/seller?sellerId=6108fb29f58bf55437a79e44"
    );
    setListItem(getItems.data.data);
  };

const description=(data)=>{
    setCartItem([data._id])
}
console.log(cartItem);
  return (
    <div>
      <div className="productFlx">

        {listitem.map(
          (data,index) => (
            <div className="listproduct" key={index}>
              <h2>{data.name}</h2>
              <img src={data.image}></img>
              
              <button onClick={()=>description(data)}>Description</button>
              {cartItem.map((id,index)=>{
                   <CartItem productId={id}/>
              }
              )}
            </div>
          )
        )}
      </div>
      
    </div>
  );
};

import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const CartItem = (id) => {
  const [discriptionProduct,setdiscriptionProduct]=useState([])
    useEffect(()=>{
        getProduct()
    },[])
    const getProduct = async () => {
        
        const getItems = await axios.get("http://nammacart-dev-lb-1671514857.ap-south-1.elb.amazonaws.com:8080/products?_id=612f1412fab74c9e512d2823&sellerId=6108fb29f58bf55437a79e44");
            setdiscriptionProduct(getItems)
      };
      
  return (
    <div>
        {discriptionProduct.map((each)=>{}
             
        )}
    </div>
  )
}

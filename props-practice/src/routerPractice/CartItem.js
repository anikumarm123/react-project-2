import React, { useState } from 'react'
import { useEffect } from 'react';

const CartItem = () => {
  
 const [cartItems,setCartItems] = useState([])
  useEffect(() => {
    getCartItem()
  }, [])
  const getCartItem = ()=>{

   const cartFood = JSON.parse(localStorage.getItem('cartItem'))
   setCartItems(cartFood)
  
  }
  
  return (
    <div className='cartfood'>
      <h1>Order Items</h1>
      <div className='eachflx'>
       {cartItems.map((data,index)=>
        <div className='eachdata' key={index}> 
        <h1>{data.name}</h1>
         <img src={data.image}></img><br></br>
         <button>remove</button>
         <button>More Info</button>
         
         </div>
    )}
      </div>
      
    </div>
  )
}

export default CartItem
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
  const plusBtn =(data)=>{
    const check = cartItems.some((inc)=>inc.id === data.id)
    if(check === true){
        const item = cartItems.map((para)=>{
            if(para.id === data.id){
              return {...para,qty:para.qty+1}
            }     
      })
      setCartItems([item])   
    }
  }
  
  return (
    <div className='order'>
      <h1>Order Items</h1>
      <div className='orderitem'>
       {cartItems.map((data,index)=>
        <div className='ordereachitem' key={index}> 
        <h2>{data.name}</h2>
         <img src={data.image}></img><br></br>
         <button onClick={()=>plusBtn(data)} >+</button>
         <span>Quandity : {data.qty}</span>
         <button>-</button><br></br>
         <button>More Info</button>
         <button>remove</button>
         </div>
    )}
      </div>
      
    </div>
  )
}

export default CartItem
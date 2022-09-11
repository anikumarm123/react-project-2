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
    if(check){
        const item = cartItems.map((para)=>{
            if(para.id === data.id){
              return {...para,qty:para.qty+1}
            }
            else{
              return para
            }     
      })
      setCartItems(item)   
    }
  }
  
const minusBtn = (minus)=>{
  const check = cartItems.some((inc)=>inc.id === minus.id)
  if(check){
      const item = cartItems.map((para)=>{
          if(para.id === minus.id){
            return {...para,qty:para.qty-1}
          }
          else{
            return para
          }     
    })
    setCartItems(item)   
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
         <button onClick={()=>minusBtn(data)}>-</button><br></br>
         <button>remove</button>
         </div>
    )}
      </div>
      
    </div>
  )
}

export default CartItem
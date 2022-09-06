import React from 'react'

const OrderItems = (a) => {  
  const remove=()=>{
     a.removeBtn(a.each)
  }
  const plus =()=>{
    a.plusBtn(a.each)
  }
  const minus =()=>{
    a.minusBtn(a.each)
  }
  return (   
    <div className='eachfood'>
        
        <h1>{a.each.name}</h1>
        <img src={a.each.image}/><br/>        
        <button onClick={()=>remove()}>Remove</button><br/>
        <button onClick={()=>plus()}>+</button>
        <span>Quantity :{a.each.qty}</span>
        <button onClick={()=>minus()}>-</button>
    </div>
  )
}

export default OrderItems
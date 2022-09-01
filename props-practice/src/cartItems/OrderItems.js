import React from 'react'

const OrderItems = (a) => {  
  return (   
    <div className='eachfood'>
        <h1>{a.each.name}</h1>
        <img src={a.each.image}/><br/>        
        <button>Remove</button><br/>
        <button>+</button>
        <span>Quantity :{a.each.qt}</span>
        <button>-</button>
    </div>
  )
}

export default OrderItems
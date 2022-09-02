import React from 'react'



const OrderItems = (a) => {  
  const remove=()=>{

  }
  const plus =()=>{
  
  }
  const minus =()=>{
    
  }
  return (   
    <div className='eachfood'>
        <h1>{a.each.name}</h1>
        <img src={a.each.image}/><br/>        
        <button onClick={()=>remove()}>Remove</button><br/>
        <button onClick={()=>plus()}>+</button>
        <span>Quantity :{a.each.qt}</span>
        <button onClick={()=>minus()}>-</button>
    </div>
  )
}

export default OrderItems
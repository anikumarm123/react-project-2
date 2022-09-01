import React from 'react'


const ItemList = (food) => {
  const orderItem = ()=>{
      food.order(food.items)
  }
  return (
    <div className='eachfood'>
        <h1>{food.items.name}</h1>
        <img src={food.items.image}/><br/>
        <button onClick={ ()=> orderItem()}>Add To Cart</button>
    </div>
  )
}

export default ItemList
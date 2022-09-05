import React from 'react'

const ShowItem = (product) => {
    
const remove=()=>{
   product.removeBtn(product.item)
}
const edit = ()=>{
   product.edit(product.item)
}    
  return (
    <div className='each-item'>
        <h2>Product Name : {product.item.ProductName}</h2>
        <h2>Product Price : {product.item.ProductPrice}</h2>
        <h2>Product Available : {product.item.availableQty}</h2>
        <button onClick={()=>remove()}>Remove</button>
        <button onClick={()=>edit()}>Edit</button>
    </div>
  )
}

export default ShowItem
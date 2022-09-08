import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
   
   const cartNav = useNavigate()

   const [item, setListItem] = useState([])

   const [viewItem,setViewItem] = useState([])
 
  useEffect(()=>{
    getListItem()
  },[])

  const getListItem = ()=>{
      const listFoods = JSON.parse(localStorage.getItem('listItem'));
      setListItem( listFoods);  
  }
  const CartFun =(data)=>{
     setViewItem([...viewItem,{data}])
     console.log(viewItem);
  }
  const viewFun=()=>{
    
    localStorage.setItem('cartItem',JSON.stringify(viewItem));
    cartNav('/cartItem')
  }
  return (
    
    <div className='view' >
      <button className='viewbtn' onClick={()=>viewFun()}>View Cart Items</button>
      <div className='mainflx'>
         {item.map((data)=>
            <div className='eachdata'> 
            <h1>{data.name}</h1>
             <img src={data.image}></img><br></br>
             <button onClick={()=>CartFun(data)}>Add to Cart</button>
             
            </div>
         )
         }
         </div>
    </div>
  )
}

export default Profile
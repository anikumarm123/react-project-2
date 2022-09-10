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
    // const check = viewItem.some((eachItem)=>
    //     eachItem.id === data.id  
    // )
    // console.log(check);
    // if(check){
    //   const duplicateRemove = viewItem.map((item)=>{ 
    //     if(item.id === data.id){
    //         return{...item,qty:item.qty+1}
    //     }
    //     else{
    //       return item
    //     }

    //    })
    //    setViewItem([...duplicateRemove])
    // }
    // else{
      setViewItem([...viewItem,{...data,qty:1}])
    //}
  }

  const viewFun=()=>{
    
    localStorage.setItem('cartItem',JSON.stringify(viewItem));
    cartNav('/cartItem')
  }
  return (
    
    <div className='view' >
      <button className='viewbtn' onClick={()=>viewFun()}>View Cart Items</button>
      <div className='mainflx'>
         {item.map((data,index)=>
            <div className='eachdata' key={index}> 
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
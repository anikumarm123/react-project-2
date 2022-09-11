import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Details = () => {

    const [infoDetailItem,setInfo]=useState([])
    const params = useParams()   


useEffect(()=>{
   getdetail()
},[])  
const getdetail =()=>{
    const info = JSON.parse(localStorage.getItem('infoitem'))
    setInfo(info)
    
}
const filterItemInfo =  infoDetailItem.filter((data)=>
    data.id===(~~params.id)
)   


  return (
    <div className='infoflx'>
    { filterItemInfo.map((data,index)=>
         <div key={index} className='infoitem'>
             <h1>{data.name}</h1>
             <img src={data.image}></img><br></br>
             <span>Price :<s>{data.price}</s></span>
             <span>Offer : {data.offer}</span>   
         </div>     
    )}
    </div>
  )
}

export default Details
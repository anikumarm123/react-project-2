import React, { useState } from 'react'

const Profile = () => {
  const [item, setItem] = useState([
    {id:1, name: "Dhosai", image: require("../image/item-1.jpg")},
    {id:2, name: "Dhosai", image: require("../image/item-2.jpg")},
    {id:3, name: "Dhosai", image: require("../image/item-3.jpg")},
    {id:4, name: "Dhosai", image: require("../image/item-4.webp")},
    {id:5, name: "Dhosai", image: require("../image/item-5.jpg")},
    {id:6, name: "Dhosai", image: require("../image/item-6.jpg")},
  ]);
  return (
    
    <div className='mainflx'>
         {item.map((data)=>
             <div className='eachdata'> 
            <h1>{data.name}</h1>
             <img src={data.image}></img>
             </div>
         )
         }
    </div>
  )
}

export default Profile
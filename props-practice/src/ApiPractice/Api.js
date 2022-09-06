
import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';
const { useState } = require("react");

const Api = () => {

  const [todos,settodos]=useState([]);

  useEffect(()=>{
    gettodos()
  },[])
    
  const gettodos =async ()=>{
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  // const json = await res.json();
  // console.log('res',json);

  // fetch('https://jsonplaceholder.typicode.com/todos')
  // .then(response => response.json())
  // .then(json => settodos(json))
  

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => settodos(json));

const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
console.log(res);
settodos(res.data)
  }
  
  return (
    <div>
      <h1>
      {todos?.map((item,index)=><p key={(index)}>{item.title}</p>)}
      </h1>
    </div>
  )
}

export default Api


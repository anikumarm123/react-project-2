
import React from 'react'
import { useEffect } from 'react'
//const { useState } = require("react");


const gettodos = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))
}

useEffect(()=>{
    gettodos()
},[])
//const [todos,settodos]=useState([]);


const Api = () => {
  return (
    <div></div>
  )
}

export default Api


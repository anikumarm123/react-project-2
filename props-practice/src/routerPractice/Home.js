import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import "./route.css"

const Home = () => {
  const[checkUserName,setCheckName] = useState(['muthu','kumar','ragul']);
  const[checkUserPassWord,setCheckPassWord] = useState(['123','456','789']);
  const[username,setUserName] = useState('');
  const[userpassWord,setUserPassword]=useState('');

  const nav = useNavigate();
  
const mainFun = (data)=>{
    if(data.target.name ==='username'){
      setUserName(data.target.value);
    }
    if(data.target.name === 'password'){
        setUserPassword(data.target.value);
    }
}
const login =()=>{
     localStorage.setItem('listItem',JSON.stringify([
      {id:1, name: "Dhosai", image: require("../image/item-1.jpg")},
      {id:2, name: "Boori", image: require("../image/item-2.jpg")},
      {id:3, name: "Idly", image: require("../image/item-3.jpg")},
      {id:4, name: "Mutton", image: require("../image/item-4.webp")},
      {id:5, name: "Protta", image: require("../image/item-5.jpg")},
      {id:6, name: "Chiken", image: require("../image/item-6.jpg")},
    ]))

    const name = checkUserName.includes(username);
    const password = checkUserPassWord.includes(userpassWord)
    console.log(name,password);
    if(name === password){
        nav('/profile')
    }
    
}
  return (
    <div className='route'>
  
        {/* <Link to='profile'>go profile</Link> */}
        <label>Enter User Name :</label><br></br>
        <input name='username' onChange={mainFun}></input><br></br>
        <label>Enter user PassWord :</label><br></br>
        <input name='password' onChange={mainFun}></input><br></br>
        <button onClick={login}>Log in</button>
        
    </div>
  )
}

export default Home
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import "./route.css"

const Home = () => {
  const[checkUserName,setCheckName] = useState(['Muthu','kumar','ragul']);
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
    const name = checkUserName.includes(username);
    const password = checkUserPassWord.includes(userpassWord)
    if(name === password){
        nav('profile')
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
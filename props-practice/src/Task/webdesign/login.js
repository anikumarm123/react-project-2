import React from 'react'

const Login = () => {
  return (
    <div className='login'>
            <div className='loginbox'>
                <h3>Log In</h3>
                <p>Enter Username and Password for the following form</p>
                <input placeholder='User name'></input><br></br>
                <input placeholder='User Password'></input>
                <p>forget poswrd?</p>
                <button>Log In</button>
            </div>
    </div>
  )
}

export default Login
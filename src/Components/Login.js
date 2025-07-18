import React, { useState } from 'react'
import  './login.css'
import { useDispatch } from 'react-redux'
import { login } from '../features/UserSlice'

const Login = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const dispatch = useDispatch()
  const handleSubmit =(e)=>{
    e.preventDefault()
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggenIn: true
      })
    )
  }

  return (
    <div className='login'>
      <form action="" className="login__form" onSubmit={(e)=>{handleSubmit(e)}}>
        <h1 > Login Here</h1>
        <input
          type="name" 
          placeholder='Name' 
          value={name} 
          onChange={e=>{setName(e.target.value)}}
        />
        <input 
          type="email"
          placeholder='Email' 
          value={email}
          onChange={e=>{setEmail(e.target.value)}}
        />
        <input 
          type="password" 
          placeholder='Password' 
          value={password}
          onChange={e=>{setPassword(e.target.value)}}
        />
        <button type='submit' className="submit__btn" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Login
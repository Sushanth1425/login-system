import React from 'react'
import "./logout.css"
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/UserSlice'

const Logout = () => {
  const user= useSelector(selectUser)
  const dispatch =useDispatch()
  const handleLogout= (e)=>{
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <div className='logout'>
      <h1>
        Welcome <span className='user__name'>{user.name}</span>
      </h1>
      <button className='logout__button' onClick={handleLogout}>Logout </button>
      
    </div>
  )
}

export default Logout
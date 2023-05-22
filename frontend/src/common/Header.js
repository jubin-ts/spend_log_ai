import React from 'react';
import {Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const {logout} = useLogout()
  const {uuser} = useAuthContext()
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout()
    navigate('/')
  }
 

  // function handleLoginClick() {
  //   <Link to="/login">login</Link>
  // }
  

  return (
    <div className='bg-gray-800 py-4 fixed top-0 w-full'>
      <div className='container mx-auto flex items-center justify-between px-4'>
        <h1 className='text-white text-2xl font-bold'>SpendLog AI</h1>
        {/* <div>
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div> */}
        {uuser && (
        <div>
          <span>{uuser.email}</span>
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded'
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        </div>)}
       {!uuser && (
        <div>
          <Link to="/login" className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded' >login</Link>
          {/* <Link to="/signup" ></Link> */}
        </div>
       )}
      </div>
    </div>
  );
}

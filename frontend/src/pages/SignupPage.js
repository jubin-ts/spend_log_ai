import React, { useState,useEffect } from 'react';
import { useSignup } from '../hooks/useSignup';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [ email,setEmail] = useState('')
  const [ password,setPassword] = useState('')
  const { signup, isLoading, error} = useSignup()
  const navigate = useNavigate()

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    setEmail(storedEmail);
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email,password)
    navigate('/tryforfree')
  }

  return (
    <form  onSubmit={handleSubmit} >
      <div> < Header />
    <div className='flex flex-col items-center justify-center min-h-screen bg-sky-200'>
      <h1 className='text-2xl font-bold mb-4'>Login</h1>
      <div className='flex flex-col items-center space-y-4'>
        <input
          type='email'
          className='border border-gray-400 px-4 py-2 rounded'
          placeholder='Enter email id'
          onChange={(e)=> setEmail(e.target.value) }
          value={email}
          readOnly
        />
        <input
          type='password'
          className='border border-gray-400 px-4 py-2 rounded'
          placeholder='create your password'
          onChange={(e)=> setPassword(e.target.value) }
          value={password}
        />
        <button disabled={isLoading} className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
          Submit
        </button>
        {error && <div>{error}</div>}
      </div>
    </div>
    < Footer />
    </div>
    </form>
  );
}

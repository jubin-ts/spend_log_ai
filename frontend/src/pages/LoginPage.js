import React,{useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginup } from '../hooks/useLogin';
import Header from '../common/Header';
import Footer from '../common/Footer';
//import { AuthContext } from '../context/AuthContext';
export default function LoginPage() {
  const [ email,setEmail] = useState('')
  const { logup, isLoading, error} = useLoginup()
  const navigate = useNavigate()
  //const { uuser } = useContext(AuthContext);
  const msg = JSON.parse (localStorage.getItem('user'))
  const handleSubmit =  (e) => {
    e.preventDefault()
    try {
    
     const uuser =  logup(email)
    localStorage.setItem('email', email)
      console.log(uuser)
    if (msg.message === 'Please create a password.') {
      navigate('/signup');
    } 
    if (uuser && msg.message === 'Please enter your password.') {
      navigate('/login2');
    } 
    if (!uuser) {
      console.log('no uuser')
    }
    
    else {
      console.log('not working');
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle the error
  }
   };
   
  
  return (
    <form onSubmit={handleSubmit}>
      <div> <Header />
    <div className='flex flex-col items-center justify-center min-h-screen bg-sky-200'>
      <h1 className='text-2xl font-bold mb-4'>Login</h1>
      <div className='flex flex-col items-center space-y-4'>
        <input
          type='email'
          className='border border-gray-400 px-4 py-2 rounded'
          placeholder='Enter email id'
          onChange={(e)=> setEmail(e.target.value) }
          value={email}
        />
        <button disabled={isLoading} className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
          Submit
        </button>
        {error && <div>{error}</div>}
      </div>
    </div>
    <Footer />
    </div>
    </form>
  );
  
}


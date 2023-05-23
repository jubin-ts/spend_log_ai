import React, { useState, useEffect } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useNavigate } from 'react-router-dom';

export default function TryforfreePage() {
  const [tryforfree, setTryForFree] = useState(null);
  const [ email,setEmail] = useState('')
  const [company_headquarters,setCompanyHeadQuarters] = useState('');
  const [company_size,setCompanySize] = useState('');
  const [company_name, setCompanyName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    setEmail(storedEmail);
  }, [])

  useEffect(() => {
    const fetchTry = async () => {
      const response = await fetch('/api/tryforfree');
      const json = await response.json();

      if (response.ok) {
        setTryForFree(json);
      }
    };
    fetchTry();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tryData = {
      email,
      company_name,
      company_size,
      company_headquarters
      
    };

    const response = await fetch('/api/tryforfree', {
      method: 'POST',
      body: JSON.stringify(tryData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    } else {
      setEmail('')
      setCompanySize('');
      setCompanyHeadQuarters('');
      setCompanyName('');
      setError(null);
      console.log('New data added:', data);
    }
    navigate('/splashpage')
  };

  return (
    <form className='demo' onSubmit={handleSubmit}>
      <div> <Header />
      <div className='flex flex-col items-center justify-center min-h-screen bg-sky-200'>
        <h1 className='text-2xl font-bold mb-4'>Fill the Form</h1>
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
            type='text'
            className='border border-gray-400 px-4 py-2 rounded'
            placeholder='Enter your company name'
            onChange={(e) => setCompanyName(e.target.value)}
            value={company_name}
          />
          <input
            type='text'
            className='border border-gray-400 px-4 py-2 rounded'
            placeholder='Enter company headquarters'
            onChange={(e) => setCompanyHeadQuarters(e.target.value)}
            value={company_headquarters}
          />
          <input
            type='text'
            className='border border-gray-400 px-4 py-2 rounded'
            placeholder='Enter size of company'
            onChange={(e) => setCompanySize(e.target.value)}
            value={company_size}
          />
          
          <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
            Submit
          </button>
          {error &&         <div className='text-red-500'>{error}</div>}
        </div>
      </div>
      <Footer />
      </div>
      
    </form>
  );
}



import React, { useState, useEffect } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default function DemoPage() {
  const [demo, setDemo] = useState(null);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [company_name, setCompanyName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDemo = async () => {
      const response = await fetch('/api/demo');
      const json = await response.json();

      if (response.ok) {
        setDemo(json);
      }
    };
    fetchDemo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const demoData = {
      first_name,
      last_name,
      company_name,
      city,
      email,
      mobile,
    };

    const response = await fetch('/api/demo', {
      method: 'POST',
      body: JSON.stringify(demoData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    } else {
      setFirstName('');
      setLastName('');
      setCompanyName('');
      setCity('');
      setEmail('');
      setMobile('');
      setError(null);
      console.log('New data added:', data);
    }
  };

  return (
    <form className='demo' onSubmit={handleSubmit}>
      <div> <Header />
      <div className='flex flex-col items-center justify-center min-h-screen bg-sky-200'>
        <h1 className='text-2xl font-bold mb-4'>Fill the Form</h1>
        <div className='flex flex-col items-center space-y-4'>
          <input
            type='text'
            className='border border-gray-400 px-4 py-2 rounded'
            placeholder='Enter your first name'
            onChange={(e) => setFirstName(e.target.value)}
            value={first_name}
          />
          <input
            type='text'
            className='border border-gray-400 px-4 py-2 rounded'
            placeholder='Enter your last name'
            onChange={(e) => setLastName(e.target.value)}
            value={last_name}
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
            placeholder='Enter your city'
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <input
            type='email'
            className='border border-gray-400 px-4 py-2 rounded'
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type='text'
            className='border border-gray-400 px-4 py-2 rounded'
            placeholder='Enter your mobile number'
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
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



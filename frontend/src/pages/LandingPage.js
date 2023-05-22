import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  let navigate = useNavigate();

  function handleClickDemo() {
    navigate('/demo');
  }

  function handleClickTry() {
    navigate('/login');
  }

  return (
    <div className='bg-green-100 min-h-screen flex flex-col justify-between'>
      <Header />
      <div className='flex-grow flex items-center justify-center'>
        <div className='flex flex-col items-center space-y-4'>
          <button
            onClick={handleClickDemo}
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
          >
            Demo
          </button>
          <button
            onClick={handleClickTry}
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
          >
            Try for Free
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

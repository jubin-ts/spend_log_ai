import React, { useState, useEffect } from 'react';
import { useLogin } from '../hooks/useLogin2';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { useNavigate } from 'react-router-dom';

export default function Login2Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();
  const [emailFromAPI, setEmailFromAPI] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/tryforfree');

        if (!response.ok) {
          throw new Error('Network response was not OK');
        }

        const data = await response.json();
        const responseData = data;

        console.log(data);

        const emailFromResponse = responseData[0].email;

        console.log(emailFromResponse);

        setEmailFromAPI(emailFromResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    setEmail(storedEmail);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);

    if ( emailFromAPI !== email) {
      navigate('/tryforfree');
    } 
    if ( emailFromAPI === email)
    {
      navigate('/splashpage');
    }
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen bg-sky-200">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <div className="flex flex-col items-center space-y-4">
            <input
              type="email"
              className="border border-gray-400 px-4 py-2 rounded"
              placeholder="Enter email id"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              readOnly
            />
            <input
              type="password"
              className="border border-gray-400 px-4 py-2 rounded"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              disabled={isLoading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
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

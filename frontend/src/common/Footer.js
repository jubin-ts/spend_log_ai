import React from 'react';

export default function Footer() {
  return (
    <div className='bg-gray-800 py-4 fixed bottom-0 w-full'>
      <div className='container mx-auto'>
        <div className='flex justify-center'>
          <a href='#' className='text-gray-500 hover:text-gray-300 mx-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
          </a>
          <a href='#' className='text-gray-500 hover:text-gray-300 mx-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 10l7-7m0 0l7 7m-7-7v18'
              />
            </svg>
          </a>
          <a href='#' className='text-gray-500 hover:text-gray-300 mx-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
            </svg>
          </a>
          <a href='#' className='text-gray-500 hover:text-gray-300 mx-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 2C6.475 2 2 6.475 2 12c0 5.525 4.475 10 10 10s10-4.475 10-10c0-5.525-4.475-10-10-10zm0 18c-4.411 0-8-3.589-8-8 0-4.411 3.589-8 8-8 4.411 0 8 3.589 8 8 0 4.411-3.589 8-8 8zm4.5-13.5c.828 0 1.5.672 1.5 1.5 0 .828-.672 1.5-1.5 1.5-.828 0-1.5-.672-1.5-1.5 0-.828.672-1.5 1.5-1.5z'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}


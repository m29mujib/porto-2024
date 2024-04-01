import React from 'react'
import { useLocation } from 'react-router';

const Head = () => {
    const location = useLocation();
    const path = location.pathname;
  return (
    <div className='flex p-4'>
        <h1 className='text-bold text-3xl relative'>
            Welcome, {path === '/' ? 'Home' : path === '/about' ? 'About' : path === '/blogs' ? 'Blogs' : path === '/resume' ? 'Resume' : 'Contact'}
        </h1>
    </div>
  )
}

export default Head
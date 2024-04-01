import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Head from '../pages/Head/Head'

const Layout = () => {
  return (
<div className='relative flex justify-center w-full h-full bg-gradient-to-r from-purple-500 to-pink-500'>
    <div className='w-[25%] fixed top-[20%] left-[3%] h-full'>
        <Sidebar/>
    </div>
    <div className='w-[60%] mx-auto ml-[28%] py-[5%] px-[2%]'>
        <div className="h-full flex justify-center items-center">
            <Outlet/>
        </div>
    </div>
    <div className='w-[9%] fixed right-[3%] top-[10%] h-full bg-transparent'>
        <Navbar/>
    </div>
</div>

  )
}

export default Layout
import React from 'react'
import Home from '../../assets/home.png'
import About from '../../assets/about.png'
import Blogs from '../../assets/blog.png'
import Resume from '../../assets/resume.png'
import Contact from '../../assets/phone.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex w-full h-[60%] flex-col items-center justify-center bg-[#fff] p-2 shadow-lg rounded-lg'>
        <Link to="/" className='text-[11px] w-[60px] bg-[#eaeaea] transition duration-300 hover:bg-[#b1b1b1] rounded-lg mb-2 py-2 px-4'><img src={Home} alt="home" className='w-[40px] '/>Home</Link>
        <Link to="/about" className='text-[11px] w-[60px] bg-[#eaeaea] transition duration-300 hover:bg-[#b1b1b1] rounded-lg mb-2 py-2 px-4'><img src={About} alt="about"  className='w-[40px] '/>About</Link>
        <Link to="/blogs" className='text-[11px] w-[60px] bg-[#eaeaea] transition duration-300 hover:bg-[#b1b1b1] rounded-lg mb-2 py-2 px-4'><img src={Blogs} alt="blogs"  className='w-[40px] '/>Blogs</Link>
        <Link to="/resume" className='text-[11px] w-[60px] bg-[#eaeaea] transition duration-300 hover:bg-[#b1b1b1] rounded-lg mb-2 py-2 px-4'><img src={Resume} alt="resume"  className='w-[40px] '/>Resume</Link>
        <Link to="/contact" className='text-[11px] w-[60px] bg-[#eaeaea] transition duration-300 hover:bg-[#b1b1b1] rounded-lg py-2 px-4'><img src={Contact} alt="contact"  className='w-[40px] '/>Contact</Link>
    </nav>
  )
}

export default Navbar
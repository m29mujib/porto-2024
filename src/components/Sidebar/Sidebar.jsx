import React from 'react'
import Home from '../../assets/home.png'
import Fb from '../../assets/facebook.png'
import Ig from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png'
import Phone from '../../assets/phone-call.png'
import Email from '../../assets/mail.png'
import Location from '../../assets/placeholder.png'
import Date from '../../assets/schedule.png'
import Mujib from '../../assets/mujib.jpeg'
const Sidebar = () => {
  return (
    <div className='w-full h-[75%] bg-[#fff] flex flex-col justify-between items-center p-4 shadow-lg rounded-lg'>
       <div className='atas flex flex-col w-full items-center mt-[-130px]'>
        <img src={Mujib} alt="home" className='w-[200px] rounded-lg'/>
        <h1 className='font-bold text-center text-2xl mb-2 mt-2'>Muhamad Abdul Mujib</h1>
        <p className='text-center bg-[#eaeaea] p-2 text-sm'>Frontend Developer</p>
        <div className='flex mt-2'>
          <a href="" className='mr-2 bg-[#eaeaea] p-1 rounded-sm w-[30px] h-[30px]'><img src={Fb} alt="" className='w-full h-full'/></a>
          <a href="" className='mr-2 bg-[#eaeaea] p-1 rounded-sm w-[30px] h-[30px]'><img src={Ig} alt="" className='w-full h-full'/></a>
          <a href="" className='mr-2 bg-[#eaeaea] p-1  rounded-sm w-[30px] h-[30px]'><img src={Github} alt="" className='w-full h-full'/></a>
          <a href="" className='bg-[#eaeaea] p-1 rounded-sm w-[30px] h-[30px]'><img src={Linkedin} alt="" className='w-full h-full'/></a>
        </div>
       </div>
       <div className='tengah m-3 p-3 bg-[#eaeaea] rounded-lg w-full'>
        <div className='bungkus mb-3 flex w-full'>
          <div className='kiri bg-[#fff] w-[40px] h-[40px] rounded-sm p-2 mr-2'>
            <img src={Phone} alt="" className='w-full h-full'/>
          </div>
          <div className='kanan flex flex-col w-full border'>
            <p className='text-[10px]'>Phone</p>
            <p className='text-[12px]'>085782522106</p>
          </div>
        </div>
        <div className='bungkus mb-3 w-full flex'>
          <div className='kiri bg-[#fff] w-[40px] h-[40px] rounded-sm p-2 mr-2'>
            <img src={Email} alt="" className='w-full h-full'/>
          </div>
          <div className='kanan flex flex-col'>
            <p className='text-[10px]'>Email</p>
            <p className='text-[12px]'>mamujib29@gmail.com</p>
          </div>
        </div>
        <div className='bungkus mb-3 w-full flex'>
          <div className='kiri bg-[#fff] w-[40px] h-[40px] rounded-sm p-2 mr-2'>
            <img src={Location} alt="" className='w-full h-full'/>
          </div>
          <div className='kanan flex flex-col'>
            <p className='text-[10px]'>Location</p>
            <p className='text-[12px]'>Bogor, Jawa Barat</p>
          </div>
        </div>
        <div className='bungkus mb-3 w-full flex'>
          <div className='kiri bg-[#fff] w-[40px] h-[40px] rounded-sm p-2 mr-2'>
            <img src={Date} alt="" className='w-full h-full'/>
          </div>
          <div className='kanan flex flex-col'>
            <p className='text-[10px]'>Birthday</p>
            <p className='text-[12px]'>29 Juni 2002</p>
          </div>
        </div>
       </div>
       <div className='bawah'>
        <button className='bg-[blue] py-2 px-5 rounded-sm text-[#fff] text-[12px]'>Download CV</button>
       </div>
    </div>
  )
}

export default Sidebar
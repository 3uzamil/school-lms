import React from 'react'
import logo from '../assets/logo.png'
import profilePic from '../assets/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <section className='p-5 bg-[#e5e5e5] flex justify-between border-b-2'>
        {/* Navbar Left */}
        <div className='flex gap-5 items-center'>
            <figure>
                <img src={logo} alt="logo" width={50}/>
            </figure>
            <h1 className='font-bold text-[#242424] text-[20px]'>School LMS - Student Portal</h1>
        </div>
        {/* Navbar Right */}
        <div className='flex items-center gap-1.5 cursor-pointer'>
            <figure>
              <img src={profilePic} width={30} className='rounded-[50px]'/>
            </figure>
            <h2 className='font-semibold'>Muzamil Hussain</h2>
            <FontAwesomeIcon icon={faAngleDown}/>
        </div>
    </section>
  )
}

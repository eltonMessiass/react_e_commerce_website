import React from 'react'
import { LuFacebook, LuInstagram, LuTwitter, LuLinkedin } from "react-icons/lu"

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-gray-800 text-center justify-center py-10 px-0 fixed w-full bottom-0 flex flex-row'>
      <div className="social-icons text-white mx-10 flex gap-3">
        <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer' className=' hover:text-[#ddd] '> <LuFacebook/></a>
        <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer' className='hover:text-[#ddd] '> <LuInstagram/></a>
        <a href="https://www.twitter.com" target='_blank' rel='noopener noreferrer' className='hover:text-[#ddd] '> <LuTwitter/></a>
        <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer' className='hover:text-[#ddd]'> <LuLinkedin/></a>
      </div>
      <p>&copy; copyright {currentYear} Elton Messias. All rights reserved</p>

    </div>
  )
}

export default Footer

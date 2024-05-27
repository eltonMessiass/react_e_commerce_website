import React from 'react'
import { Link } from 'react-router-dom'
import { LuShoppingCart } from "react-icons/lu";

function Header() {
  return (
    <div className='h-12 w-full bg-gray-800 flex flex-row justify-between px-4'>
      <h1 >
        <Link to="/" className='text-4xl text-white'>Store</Link>
      </h1>
      <Link to="/cart" className='flex flex-row items-center relative text-white'>
        <LuShoppingCart/>
        <span>0</span>
    </Link>
    </div>
  )
}

export default Header

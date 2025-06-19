import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 bg-blue-600 text-white flex justify-between px-3 items-center'>
      <div className='logo font-bold text-lg'>
        Shrinkr
      </div>
      <ul className='flex justify-center gap-4 items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Shorten</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default Navbar

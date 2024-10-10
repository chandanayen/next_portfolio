import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-10'>
        <img src='https://img.icons8.com/?size=60&id=bAsyoJF9h4zr&format=png' alt='portfolioicon' />
        <div className=' flex flex-col md:flex-row gap-5  font-bold text-xl cursor-pointer  '>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/portfolio'}>Portfolio</Link>
        <Link href={'/contact'}>contact</Link>
       
    
    
        
        
    </div>
    </div>
  
  )
}

export default NavBar
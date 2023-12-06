import React from 'react'
import Link from 'next/link'
import { IoBugOutline } from "react-icons/io5";

const Navbar = () => {

    const links = [
        {label:"Dashboard", href:"/"},
        {label:"Issues", href:"/issues"},
    ]
  return (
    <nav className='flex border-b space-x-6 mb-5 px-5 h-14 items-center'>
      <Link href="/"><IoBugOutline /></Link>
      <ul className='flex space-x-6'>
        {links.map(link =><Link className='text-zinc-400 hover:text-zinc-700 transition-colors'
         key={link.href} href={link.href}>{link.label}</Link>)}
      </ul>
    </nav>
  )
}

export default Navbar

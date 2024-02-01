import React from 'react'
import { headerLogo } from '../../public/assets/images/index.js'
import { hamburger } from '../../public/assets/icons/'
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/const/index.js'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <Image
                src={headerLogo}
                alt='logo'
                width={130}
                height={29}/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
                <Link className='font-montserrat leading-normal text-lg text-slate-gray' key={item.label} href={item.href}>{item.label}</Link>
            ))}
            </ul>
            <div className='hidden max-lg:block'>
                <Image src={hamburger} 
                alt='hamburger'
                width={25}
                height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav
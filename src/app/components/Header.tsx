import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-orange-600'>
     <div className='container mx-auto flex justify-between items-center px-10 h-[70px] bg-orange-600'>
       <div>
       <Link href={'/'}><Image src={'/blog-logo.png'} alt='logo' width={80} height={70} className='hover:animate-pulse'/></Link>
       </div>
       <ul className='flex space-x-5'>
       <Link href={'/'}><li className='text-stone-200 hover:text-stone-700 font-bold text-2xl hover:animate-bounce'>Home</li> </Link>
       <Link href={'/#sec'}> <li className='text-stone-200 hover:text-neutral-700 font-bold text-2xl hover:animate-bounce'>Books</li></Link>
       </ul>
     </div>
    </header>
  )
}
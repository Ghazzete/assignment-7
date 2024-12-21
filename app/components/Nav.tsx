import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <nav className='bg-blue-600 p-4 text-[#fff] shadow-md md:text-[20px]'>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='md:text-2xl font-bold'>Data Fetching</h1>
            <ul className='flex space-x-4'>
                <li>
                    <Link href='/' className='hover:scale-105 hover:font-bold transition duration-300 '>Home</Link>
                </li>
                <li>
                    <Link href="/client-side" className='hover:scale-105 hover:font-bold transition duration-300'>
                    Client Data</Link>
                </li>
                <li>
                    <Link href="/server-side" className='hover:scale-105 hover:font-bold transition duration-300'>
                    Server Data</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
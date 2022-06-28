import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex flex-col mt-4 py-8 justify-center items-center bg-neutral-50 dark:bg-sky-900 text-sky-900 dark:text-neutral-50 p-2 md:p-4 md:rounded-lg shadow-2xl w-full'>
        <div className='m-2'>
            <p className='font-semibold'>CryptoNews &copy; All Right Reserved</p>
        </div>
        <div className='flex flex-row justify-evenly items-center w-full text-sm'>
        <Link to='/'>Home</Link>
        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        <Link to='/exchange'>Exchange</Link>
        <Link to='/news'>News</Link>
        </div>
    </footer>
  )
}

export default Footer
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
    HiOutlineHome, 
    HiOutlineCurrencyDollar, 
    HiOutlineLightBulb, 
    HiOutlineScale,
    HiOutlineMenu,
 } from "react-icons/hi";
import Switcher from './Switcher';
import icon from '../Images/shiba-inu-shib-logo.png'

const Navbar = () => { 
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
      <>
      <header className=''>
        {/* the logo */}
        <div className='flex flex-row items-center gap-x-2'>
          <img src={icon} alt="icon" className='w-16 h-16 rounded-full'/>
          <p className='text-xl font-semibold'>
              <Link to='/'>CryptoNews</Link>
          </p>
          <div className='md:hidden absolute top-6 right-4' onClick={() => setActiveMenu(!activeMenu)}>
            <HiOutlineMenu className='w-8 h-8 cursor-pointer'/>
          </div>
        </div>
      {/* the navbar menu */}
      {activeMenu && (
        <div>
        <div className='flex md:flex-col justify-evenly flex-wrap gap-y-2'>
          <Link to='/' className='basis-1/2 flex flex-row gap-x-2 items-center'>
              <HiOutlineHome className='w-8 h-8'/>
              Home
          </Link>
          <Link to='/cryptocurrencies' className='basis-1/2 flex flex-row gap-x-2 items-center'>
              <HiOutlineCurrencyDollar className='w-8 h-8' />
              Cryptocurrencies
          </Link>
          <Link to='/exchange' className='basis-1/2 flex flex-row gap-x-2 items-center'>
              <HiOutlineScale className='w-8 h-8'/>
              Exchange
          </Link>
          <Link to='/news' className='basis-1/2 flex flex-row gap-x-2 items-center'>
              <HiOutlineLightBulb className='w-8 h-8'/>
              News
          </Link>
          <div className='basis-full flex flex-row gap-x-2'>
              <p>Dark Mode</p>
              <Switcher/>
          </div>
        </div>     
    </div>
      )}

        {/* dark mode */}
    </header>
      </>
  )
}

export default Navbar
import React from 'react';
import { HiOutlineGlobe } from "react-icons/hi";

const Loading = () => {
  return (
      <>
        <div className='p-16 h-screen w-full flex items-center justify-center bg-white dark:bg-black'>
          <HiOutlineGlobe className='animate-spin delay-[50000ms] h-72 w-72 dark:text-sky-100' />
        </div>
      </>
  )
}

export default Loading
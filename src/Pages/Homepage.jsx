import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../Services/cryptoAPI';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loading from '../Components/Loading';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(12);
  const results = data?.data?.stats;

  if(isFetching) return <Loading />

  return (
    <main className='container mx-auto md:w-2/3 lg:w-3/4 h-full pt-8 px-8'>
      <h1 className='text-2xl font-semibold text-blue-900 dark:text-blue-100'>Global Crypto Stats</h1>
      <div className='grid lg:grid-cols-6 grid-cols-4 md:my-4 m-2 md:mx-8 md:gap-4 gap-2 gap-x-4 bg-white dark:bg-black rounded-lg py-4 md:justify-items-center'>
        <div className='p-2 col-span-2'>
          <p className='font-bold text-xl'>Total Coins</p>
          <p className='text-current/50 px-2'>{millify(results.total)}</p>
        </div>
        <div className='p-2 col-span-2'>
          <p className='font-bold text-xl'>Total Exchanges</p>
          <p className='text-current/50 px-2'>{millify(results.totalExchanges)}</p>
        </div>
        <div className='p-2 col-span-2'>
          <p className='font-bold text-xl'>Total Market Cap</p>
          <p className='text-current/50 px-2'>{millify(results.totalMarketCap)}</p>
        </div>
        <div className='p-2 md:col-span-3 col-span-2'>
          <p className='font-bold text-xl'>24 Hours Volume</p>
          <p className='text-current/50 px-2'>{millify(results.total24hVolume)}</p>
        </div>
        <div className='p-2 md:col-span-3 col-span-2'>
          <p className='font-bold text-xl'>Total Markets</p>
          <p className='text-current/50 px-2'>{millify(results.totalMarkets)}</p>
        </div>
      </div>
      <div>
        <div className='flex flex-row justify-between mr-4 py-2'>
          <h1 className='text-xl font-semibold'>Top Cryptocurrencies</h1>
          <Link to='/cryptocurrencies'>
            More
          </Link>
        </div>
        <Cryptocurrencies simplified />
      </div>
      <div>
        <div className='flex flex-row justify-between mr-4 py-2'>
          <h1 className='text-xl font-semibold'>Top Cryptocurrencies News</h1>
          <Link to='/news'>
            More
          </Link>
        </div>
        <News simplified />
      </div>
    </main>
  )
}

export default Homepage
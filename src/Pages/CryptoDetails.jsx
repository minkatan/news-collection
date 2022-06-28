import { useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom'
import millify from 'millify'

// icons
import { 
  HiOutlineCollection,
  HiOutlineCurrencyDollar,
  HiOutlineExclamationCircle,
  HiOutlineScale,
  HiOutlineLightningBolt,
  HiOutlineSparkles,
  HiOutlineTable,
 } from "react-icons/hi";

import Select from '../Components/Select'
import Loading from '../Components/Loading'
import LineChart from '../Components/LineChart';

import { useGetCryptosDetailsQuery, useGetCryptosHistoryQuery } from '../Services/cryptoAPI'

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [ timePeriod, setTimePeriod ] = useState('7d')
  const { data, isFetching } = useGetCryptosDetailsQuery(coinId)
  const { data: coinHistory } = useGetCryptosHistoryQuery({coinId, timePeriod})
  const details = data?.data?.coin;

  const time = [{name:'3h'},{name:'24h'},{name:'7d'},{name:'30d'},{name:'1y'},{name:'3m'},{name:'3y'},{name:'5y'}]
  const stats = [
    {title: 'Price to USD', value: `${details?.price && millify(details?.price)}`, icon: <HiOutlineCurrencyDollar />},
    {title: 'Rank', value: details?.rank, icon: <HiOutlineSparkles />},
    {title: '24h Volume', value: `${details?.volume && millify(details?.volume)}`, icon: <HiOutlineLightningBolt />},
    {title: 'Market Cap', value: `${details?.marketCap && millify(details?.marketCap)}`, icon: <HiOutlineScale />},
    {title: 'All Time High - Daily', value: `${details?.allTimeHigh?.price && millify(details?.allTimeHigh?.price)}`, icon: <HiOutlineCollection />},
  ]

  const genericStats = [
    {title: 'Number of Markets', value: details?.numberOfMarkets , icon: <HiOutlineScale />},
    {title: 'Number of Exchanges', value: details?.numberOfExchanges , icon: <HiOutlineTable />},
    {title: 'Supply Confirmed', value: `${details?.supply?.confirmed ? 'Confirmed' : 'Not Confirmed'}` , icon: <HiOutlineExclamationCircle className={details?.supply?.confirmed ? 'fill-green-700' : 'fill-red-700'}/>},
    {title: 'Total Supply', value: `${details?.supply?.total && millify(details?.supply?.total)}` , icon: <HiOutlineTable />},
    {title: 'Circulating Supply', value: `${details?.supply?.circulating && millify(details?.supply?.circulating)}` , icon: <HiOutlineTable />},
  ]
  

  if(isFetching) return <Loading />

  return (
    <div className='container mx-auto my-8 px-8 flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold'>{details.symbol} - {details.name} - Price</h1>
      <div className='w-24'>
        <Select
            options={time}
            selectedOption={timePeriod}
            handelChange={(e) => {
                setTimePeriod(e.name);
              }}
          />
      </div>
      <LineChart coinHistory={coinHistory} currentPrice={millify(details.price)} coinName={details.name} />
      <div className='flex flex-row my-8'>
        <div className='basis-1/2'>
            {stats.map(({icon, title, value}) => (
              <div className='flex flex-row gap-x-4'>
                <p className='basis-1/8'>{icon}</p>
                <p className='basis-1/3'>{title}</p>
                <p className='basis-1/3'>{value}</p>
              </div>
            ))}
        </div>
        <div className='basis-1/2'>
            {genericStats.map(({icon, title, value}) => (
              <div className='flex flex-row gap-x-4'>
                <p className='basis-1/8'>{icon}</p>
                <p className='basis-1/3'>{title}</p>
                <p className='basis-1/3'>{value}</p>
              </div>
            ))}
        </div>
      </div>
      <div className='text-justify text-clip overflow-clip'>
        <h1 className='text-3xl my-4 ml-2 font-bold'>What is {details.name}</h1>
          {HTMLReactParser(details.description)}
      </div>
    </div>
  )
}

export default CryptoDetails
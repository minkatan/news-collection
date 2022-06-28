import { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../Services/cryptoAPI' //api query for the result
import Loading from '../Components/Loading';

// c === coins / coin / cryptocoins / cryptocurrencies

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 12 : 100;
  const { data: array, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const onChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    const cryptoList = array?.data?.coins
    setCryptos(cryptoList)

    const filteredCoin = cryptoList?.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredCoin)

  }, [array, searchTerm])

  if(isFetching) return <Loading />

  return (
    <>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 my-4'>
        {!simplified && (
      <div className='md:col-span-4 col-span-2 mx-32 mb-4'>
        <input type="text" placeholder='Search the crypto' onChange={onChange} className='w-full p-2'/>
      </div>
        )}
        {cryptos?.map((c) => (
          <div className='px-4 py-2 border-2 hover:shadow-xl hover:bg-neutral-200 hover:text-sky-900' key={c.symbol}>
            <Link to={`/crypto/${c.uuid}`}>
              <div className=''>
              <div className='font-semibold'>{`${c.rank}.${c.name}`}</div>
              <img src={c.iconUrl} alt={c.name} className='h-12 w-12'/>
              <div>
                <p>Price: {millify(c.price)}</p>
                <p>Market Cap: {millify(c.marketCap)}</p>
                <p className={c.change < 0 ? 'text-red-700' : 'text-green-700'}>
                  Daily Change: {millify(c.change)}%
                </p>
              </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>

  )
}

export default Cryptocurrencies
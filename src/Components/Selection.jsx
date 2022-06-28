import { useState } from 'react';
import { useGetCryptosQuery } from '../Services/cryptoAPI' 
import Select from './Select';

const Selection = () => {
    const { data } = useGetCryptosQuery(100);
    const coins = data?.data?.coins
    const [selectedCoin, setSelectedCoin] = useState('Bitcoin')

  return (
        <div className='py-2 px-4 rounded w-1/3'>
            <Select
                options={coins}
                selectedOption={selectedCoin}
                handelChange={(e) => {
                    setSelectedCoin(e);
                  }}
                key={coins?.uuid}
            />
        </div>
  )
}

export default Selection
import { useState } from 'react'
import moment from 'moment'
import Loading from '../Components/Loading'
import Select from '../Components/Select'

import ImagePlaceholder from '../Images/shiba-coin.jpg'

import { useGetNewsQuery } from '../Services/cryptoNews'
import { useGetCryptosQuery } from '../Services/cryptoAPI'

const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetNewsQuery({ newsCategory, count: simplified ? 6 : 50})

  const { data } = useGetCryptosQuery(100);
  const coins = data?.data?.coins
  
  const newsList = cryptoNews?.value
  if(!newsList) return <Loading />;

  return (
    <>
      <div className={simplified ? 'grid grid-cols-1 md:grid-cols-2' : 'grid container md:mx-16 my-8 gap-4'}>
        {!simplified &&         
        <div className='py-2 px-4 rounded w-1/3'>
            <Select
                options={coins}
                selectedOption={newsCategory}
                handelChange={(e) => {
                    setNewsCategory(e.name);
                  }}
            />
        </div>}
      {newsList.map((news, index) => (
        <div className='md:m-2 my-2 border-2 rounded-xl shadow-xl hover:shadow-2xl hover:transform md:hover:-translate-x-8 md:hover:scale-125 hover:bg-sky-50 hover:text-cyan-900 hover:duration-500' key={index}>
          <a href={news.url} target="_blank" rel="noreferrer" className=''>
          <div className='flex h-24'>
            <div className='w-3/4 p-2 overflow-hidden tracking-tight leading-relaxed'>
                {news.name}
            </div>
              <img src={news?.image?.thumbnail?.contentUrl || ImagePlaceholder} alt="news" className='w-1/4 h-32'/>
          </div>
        <div className='text-right h-8 w-3/4 text-xs opacity-60 py-2 truncate px-4'>
              {moment(news.datePublished).fromNow()}
        </div>
        <div className={simplified ? 'hidden' : 'opacity-50 hover:opacity-100 my-4 p-2'}>
          {news.description}
        </div>
          </a>
        </div>
      ))}
      </div>
    </>
  )
}

export default News
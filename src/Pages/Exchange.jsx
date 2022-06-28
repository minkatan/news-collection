import { useGetDetailsQuery } from "../Services/exchangeAPI";
import Loading from "../Components/Loading";
import millify from "millify";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi";

const Exchange = () => {
  const { data: exchangeData, isFetching} = useGetDetailsQuery();

  if(isFetching) return <Loading />
  return (
    <div className="container mx-auto my-8 px-8 py-4">
      <table className="table-fixed w-full border-collapse border border-sky-900 text-center">
        <thead className="border border-sky-900 bg-sky-900 text-white dark:bg-neutral-100 dark:text-sky-900">
          <tr>
            <th>Exchange Name</th>
            <th>Founded</th>
            <th>Volume Traded</th>
            <th>Trust Score</th>
          </tr>
          </thead>
          <tbody className="px-4 border">
      {exchangeData?.map((exchange) => (
        <tr key={exchange?.id} className="">
          <td className="flex flex-row items-center gap-x-2">
            <img src={exchange?.image} alt={exchange?.name} className=''/>
            <p>{exchange?.name}</p>
          </td>
          <td className="">
            <p>{exchange?.country} - {exchange?.year_established}</p>
          </td>
          <td className="">
            <p>{millify(exchange?.trade_volume_24h_btc)}</p>
          </td>
          <td className="basis-1/4 flex flex-col">
            <div className="flex flex-row gap-x-2 items-center justify-center">
              <p className="">{exchange?.trust_score}</p>
              <p className={exchange?.has_trading_incentive ? 'text-red-700' : 'text-green-700'}>{!exchange?.has_trading_incentive ? <HiOutlineCheckCircle/> : <HiOutlineXCircle />}</p>
            </div>
            <a href={exchange?.url} className='cursor-pointer'>Website</a>
          </td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Exchange
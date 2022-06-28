import React from 'react';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const change = coinHistory?.data?.change
    const data = coinHistory?.data?.history
    const coinPrice = [];
    const coinTimeStamp = [];

    for(let i = (data?.length - 1); i > 0 ; i--){
        coinPrice?.push(data[i].price)
        coinTimeStamp?.push(new Date((data[i].timestamp * 1000)).toLocaleDateString())
    }

    const chartData = {
        labels: coinTimeStamp,
        datasets: [{
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            }]
        }

    const options = {
        scales: {
            yAxis: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }

  return (

    <>
        <div>
            <h1>{coinName} Price Chart</h1>
            <div className={change < 0 ? 'text-red-700' : 'text-green-700'}>{change}%</div>
            <div>Current {coinName} Price : ${currentPrice}</div>
        </div>
        <Line data={chartData} options={options} />
    </>
  )
}

export default LineChart
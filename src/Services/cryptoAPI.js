import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const cryptoAPIHeaders = {

    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_COIN,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

// const base_URL = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoAPIHeaders})

export const cryptoAPI = createApi({
    reducerPath: 'cryptoAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptosDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptosHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
    })
})

export const { useGetCryptosQuery, useGetCryptosDetailsQuery, useGetCryptosHistoryQuery } = cryptoAPI;
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const createRequest = (url) => (url)

export const exchangeAPI = createApi({
    reducerPath: 'exchangeAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }),
    endpoints: (builder) => ({
        getDetails: builder.query({
            query: () => createRequest(`/exchanges`)
        })
    })
})

export const { useGetDetailsQuery, } = exchangeAPI;
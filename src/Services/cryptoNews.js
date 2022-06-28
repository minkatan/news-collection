import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsAPIHeaders = {

    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_COIN,
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

// const base_URL = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoNewsAPIHeaders})

export const cryptoNewsAPI = createApi({
    reducerPath: 'cryptoNewsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bing-news-search1.p.rapidapi.com/news' }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/search?q=${newsCategory}&count=${count}&freshness=Week&textFormat=Raw&safeSearch=Off`)
        })
    })
})

export const { useGetNewsQuery, } = cryptoNewsAPI;
import {configureStore} from '@reduxjs/toolkit';

import { cryptoAPI } from '../Services/cryptoAPI';
import { cryptoNewsAPI } from '../Services/cryptoNews';
import { exchangeAPI } from '../Services/exchangeAPI';

export default configureStore({
    reducer: {
        [cryptoAPI.reducerPath]: cryptoAPI.reducer,
        [exchangeAPI.reducerPath]: exchangeAPI.reducer,
        [cryptoNewsAPI.reducerPath]: cryptoNewsAPI.reducer
    },
})
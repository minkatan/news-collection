import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './Components'
import { Homepage, Exchange, CryptoDetails, Cryptocurrencies, News } from './Pages'
import { Provider } from 'react-redux'
import store from './app/store'

export default function App() {
  return (
    <Router>
      <Provider store={store}>
      <div className='flex md:flex-row flex-col h-full bg-gray-100 dark:bg-sky-800 text-sky-700 dark:text-gray-100'>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/exchange' element={<Exchange />} />
          <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
          <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
          <Route exact path='/news' element={<News />} />
        </Routes>
      </div>
      <Footer />
      </Provider>
    </Router>
  )
}
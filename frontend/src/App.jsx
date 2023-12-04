import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ENDPOINT } from './constants/constants'
import GlobalContext from './context/GlobalContext'
import NavigationBar from './components/NavigationBar'
import NotFound from './components/NotFound'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Admin from './views/Admin'
import DestinyDetail from './components/DestinyDetail'


function App() {
  const [destinyData, setDestinyData] = useState([])
  const [destinyToBuy, setDestinyToBuy] = useState([])
  const [destinyTotalPrice, setDestinyTotalPrice] = useState(0)

  const getData = async (url) => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setDestinyData(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getData(ENDPOINT)
  }, [])

  const sharedGlobal = {
    destinyData,
    setDestinyData,
    destinyTotalPrice,
    setDestinyTotalPrice,
    destinyToBuy,
    setDestinyToBuy
  }
  return (
    <>
      <GlobalContext.Provider value={sharedGlobal}>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/loginview' element={<Login />} />
            <Route path='/registerview' element={<Register />} />
            <Route path='/adminview' element={<Admin />} />
            {/* <Route path='/shoppingcartview' element={<ShoppingCartView />} /> */}
            <Route path='/destinydetail/:idDestiny' element={<DestinyDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App

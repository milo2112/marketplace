import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ENDPOINT } from './constants/constants'
import GlobalContext from './context/GlobalContext'
import NavigationBar from './components/NavigationBar'
import NotFound from './components/NotFound'
import Home from './views/Home'


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
            {/* <Route path='/shoppingcartview' element={<ShoppingCartView />} /> */}
            {/* <Route path='/pizzadetail/:idPizza' element={<PizzaDetail />} /> */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App

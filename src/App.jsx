import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Componants/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Componants/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category='men' />} />
          <Route path='/womens' element={<ShopCategory category='women' />} />
          <Route path='/kids' element={<ShopCategory category='kid' />} />
          <Route path='/kids' element={<Product />} >
            <Route path=':productID' element={<Product />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

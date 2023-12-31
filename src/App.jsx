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
import men_banner from './Componants/Assets/banner_mens.png';
import woman_banner from './Componants/Assets/banner_women.png';
import kid_banner from './Componants/Assets/banner_kids.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />} />
          <Route path='/womens' element={<ShopCategory banner={woman_banner} category='women' />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid' />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productID' element={<Product />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

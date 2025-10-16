import React, { useState } from 'react'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Header from './components/Header'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/products'

function App() {
  let [item, setItem] = useState({})
  return (
    <>
      <Header setItem={setItem} />
      <Routes>
        <Route path='/' element={<Home item={item} />} />
        <Route path='/products' element={<Products />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
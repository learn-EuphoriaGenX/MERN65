import React from 'react'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Header from './components/Header'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
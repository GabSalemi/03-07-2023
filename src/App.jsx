import { useState } from 'react'
import './App.scss'
import Hero from './components/herosection'
import Info from './components/infosection'
import Navbar from './components/navbar'


function App() {


  return (
    <>
      <Hero />
      <Info />
      <Navbar />
    </>
  )
}

export default App

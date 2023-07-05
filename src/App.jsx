import { useState } from 'react'
import './App.scss'
import Hero from './components/herosection'
import Info from './components/infosection'
import Navbar from './components/navbar'
import Form from './components/form'


function App() {


  return (
    <>
      <Hero />
      <Info />
      
      <Form />
    </>
  )
}

export default App

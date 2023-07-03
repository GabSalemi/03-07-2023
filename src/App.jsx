import { useState } from 'react'
import './App.css'
import './App.scss'
import TopDiv from './components/topdiv'
import CenterDiv from './components/centerdiv'
import BottomDiv from './components/bottomdiv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopDiv />
      <CenterDiv />
      <BottomDiv />
    </>
  )
}

export default App

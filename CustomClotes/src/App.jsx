import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardProductView from './components/CardProductView'
import CustonArea from './components/CustomArea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardProductView/>
      <CustonArea/>
    </>
  )
}

export default App

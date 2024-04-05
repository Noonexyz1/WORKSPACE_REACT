import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardProductView from './components/CardProductView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className="text-3xl font-mono underline">
        ¡Hola, mundo!
      </h1>

      <CardProductView/>

    </>
  )
}

export default App

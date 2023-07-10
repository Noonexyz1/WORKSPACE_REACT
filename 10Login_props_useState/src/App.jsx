
import { Formulario } from './components/Formulario'
import { Home } from './components/Home'

import './App.css'

import { useState } from 'react'

export function App() {

  const [user, setUser] = useState([]);

  return (
    <div>
      {
        (!(user.length > 0))? <Formulario setUser={setUser} />:
                          <Home user={user} setUser={setUser}/>
      }
    </div>
  )
}


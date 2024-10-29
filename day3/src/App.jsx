import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import State from './Components/State'
import Counter from './counter'
import Name from './Components/Name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/s' element={<State/>}/>
      <Route path='/count' element={<Counter/>}/>
      <Route path='/name' element={<Name/>}/>
    </Routes>
      <Navbar/>
      
    </>
  )
}

export default App

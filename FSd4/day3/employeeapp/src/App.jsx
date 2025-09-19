import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

import { Route, Routes } from 'react-router-dom'
import View from './components/View'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <NavBar></NavBar>
     <Routes>
      <Route path='/view' element={<View/>}/>&nbsp;
      <Route path='/add' element={<Add/>}/>
     </Routes>

    </>
  )
}

export default App

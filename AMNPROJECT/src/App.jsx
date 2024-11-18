import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './MainLayout'

const App = () => {
  return (
  <>
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<MainLayout/>}/>
   </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
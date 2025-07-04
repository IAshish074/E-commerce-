import React from 'react'
import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom'

import Home from './pages/home'
import Header from './components/header/header'

function App(){
  
  return(
    <>
    <BrowserRouter >
    <Header />
    <Routes>
      <Route path={"/"} exact={true} element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
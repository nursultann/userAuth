import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';

function App() {
 

  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Register />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Hero from './Hero'
import Navbar from './navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './about/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

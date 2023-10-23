import { useState } from 'react'
import './App.css'
import Hero from './Hero'
import Navbar from './navbar/Navbar'
import About from './about/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { DataProvider } from './context/ContectAuth'
import SignUp from './auth/register/Register'
import Login from './auth/login/Login'
import Otp from './auth/emailOtp/Otp'
import Loader from './loader/Loader'
// import PrivateRoute from './utils/PrivateRoute'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar />
      {/* <DataProvider> */}
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/l" element={<Loader />} />
        </Routes>
        {/* </DataProvider> */}
      </BrowserRouter>
    </>
  )
}

export default App

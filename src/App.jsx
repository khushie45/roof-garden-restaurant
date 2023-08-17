import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import Menu from './components/Menu'
import Specialities from './components/Specialities'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /> <Home /></>}/>
        <Route path="/Menu" element={<><Navbar /> <Menu /></>} />
        <Route path="/Specialities" element={<><Navbar /> <Specialities /></>} />
        <Route path="/About" element={<><Navbar /> <About /></>} />
        <Route path="/Contact" element={<><Navbar /> <Contact /></>} />
      </Routes>
    </Router>
  )
}
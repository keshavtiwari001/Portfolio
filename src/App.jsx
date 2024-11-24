
import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
// import Projects from './components/Projects'
import Projects from './components/projects_/Projects'
import ProjectDetails from './components/projects_/ProjectDetails'
import Skills from './components/Skills'
import Contact from './components/Contact'


function App() {

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden">


      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='projects' element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path='skills' element={<Skills />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

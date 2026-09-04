import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './App/Home'
import Projects from './App/Projects'
import Blogs from './App/Blogs'
import About from './App/About'
import Contacs from './App/Contacs'
import BlogDetail from './App/BlogDetail'


function App() {
  //   useEffect(() => {
  //   document.documentElement.classList.toggle('dark', darkMode)
  // }, [darkMode])
  return (
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='/projects' element={<Projects />}/>
    <Route path='/blogs' element={<Blogs />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contacs />}/>
    <Route path="/blogs/:slug" element={<BlogDetail />} />
    
   </Routes>
  )
}

export default App
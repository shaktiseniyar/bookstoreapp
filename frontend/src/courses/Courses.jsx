import React from 'react'
import Course from '../components/Course'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Courses() {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen"><Course/></div>
      <Footer/>
    </div>
  )
}

import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Freebook/>
      <Footer/>
    </div>
  )
}

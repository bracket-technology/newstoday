import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <Footer />
    </>
  )
}

export default Home
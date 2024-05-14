import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Products/>
        <Footer/>

    </div>
  )
}

export default Home
import React from 'react'
import Navbar from '../components/Navbar'
import ProductsDescription from '../components/ProductsDescription';
import Filters from '../components/Filters';
import Footer from "../components/Footer";
import './ProductsDetails.css';

const ProductsDetails = () => {
  return (
    <div>
        <Navbar/>
        <ProductsDescription/>
        <Filters/>
        <Footer/>


    </div>
  )
}

export default ProductsDetails  
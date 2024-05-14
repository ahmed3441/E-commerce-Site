import React from 'react'
import Navbar from '../components/Navbar'
import ProductsDescription from '../components/ProductsDescription';
import Filters from '../components/Filters';
import './ProductsDetails.css';

const ProductsDetails = () => {
  return (
    <div>
        <Navbar/>
        <ProductsDescription/>
        <Filters/>

    </div>
  )
}

export default ProductsDetails  
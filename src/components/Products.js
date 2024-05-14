import React from 'react'
import Mobile from '../assests/images/mobile.jpg';
import Accessories from '../assests/images/accessories.jpg';
import Airpods from '../assests/images/airpods.jpg';
import Bags from '../assests/images/bags.jpg';
import Shirt from '../assests/images/shirts.jpg';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
        <div className='products-text'>
          <h1>Featured Products</h1>
          </div>

        <div className="featured-products">
    
  <div className="product-card">
  <Link to='/products' className='product-link'>
    <img src={Accessories} alt="Product 1" className="product-image" />
    <h3 className="product-title">I-Phone Back Covers</h3>
    <p className="product-title">Price: 1500</p>
    </Link>
  </div>

  <div className="product-card">
  <img src={Mobile} alt="Product 2" className="product-image" />
    <h3 className="product-title">I-Phone 13 Pro Max</h3>
    <p className="product-description">Price: 300000</p>
  </div>
  <div className="product-card">
  <img src={Airpods} alt="Product 3" className="product-image" />
    <h3 className="product-title">Air Pods Pro (Anc)</h3>
    <p className="product-description">Price: 3000</p>
  </div>
  <div className="product-card">
  <img src={Bags} alt="Product 4" className="product-image" />
    <h3 className="product-title">Ladies Hand Bags</h3>
    <p className="product-description">Price: 4000</p>
  </div>
  <div className="product-card">
  <img src={Shirt} alt="Product 5" className="product-image" />
    <h3 className="product-title">Men's T-Shirts</h3>
    <p className="product-description">Price: 1000</p>
  </div>
 
</div>

    </div>
  )
}

export default Products
import React from 'react'
import Accessories from '../assests/images/accessories.jpg';

const ProductsDescription = () => {
  return (
    <div>
        <div className='card-alignment'>
        <div className="products-card">
  <div className="product-image">
    <img src={Accessories} alt="ProductImage" className='product-details'></img>
  </div>
  <div className="product-description">
    <h3>I-Phone 15 Pro Max Back Cover</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> Lorem Ipsum has been
     the industry's standard dummy text ever since the 1500s <br/> When an unknown printer took a galley of type and scrambled it to make a type specimen book.
     </p>
    <p>Price: Rs. 1500</p>
    <button className='button-alignment'>ADD TO CART</button>
  </div>
</div>
</div>
    </div>
  )
}

export default ProductsDescription
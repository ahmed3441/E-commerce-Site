// import React from 'react'
// import Mobile from '../assests/images/mobile.jpg';
// import Accessories from '../assests/images/accessories.jpg';
// import Airpods from '../assests/images/airpods.jpg';
// import Bags from '../assests/images/bags.jpg';
// import Shirt from '../assests/images/shirts.jpg';
// import { Link } from 'react-router-dom';

// const Products = () => {
//   return (
//     <div>
//         <div className='products-text'>
//           <h1>Featured Products</h1>
//           </div>

//         <div className="featured-products">
    
//   <div className="product-card">
//   <Link to='/products' className='product-link'>
//     <img src={Accessories} alt="Product 1" className="product-image" />
//     <h3 className="product-title">I-Phone Back Covers</h3>
//     <p className="product-title">Price: 1500</p>
//     </Link>
//   </div>

//   <div className="product-card">
//   <img src={Mobile} alt="Product 2" className="product-image" />
//     <h3 className="product-title">I-Phone 13 Pro Max</h3>
//     <p className="product-description">Price: 300000</p>
//   </div>
//   <div className="product-card">
//   <img src={Airpods} alt="Product 3" className="product-image" />
//     <h3 className="product-title">Air Pods Pro (Anc)</h3>
//     <p className="product-description">Price: 3000</p>
//   </div>
//   <div className="product-card">
//   <img src={Bags} alt="Product 4" className="product-image" />
//     <h3 className="product-title">Ladies Hand Bags</h3>
//     <p className="product-description">Price: 4000</p>
//   </div>
//   <div className="product-card">
//   <img src={Shirt} alt="Product 5" className="product-image" />
//     <h3 className="product-title">Men's T-Shirts</h3>
//     <p className="product-description">Price: 1000</p>
//   </div>
 
// </div>

//     </div>
//   )
// }

// export default Products









import React from 'react';
import { Link } from 'react-router-dom';
// import Mobile from '../assests/images/mobile.jpg';
// import Accessories from '../assests/images/accessories.jpg';
// import Airpods from '../assests/images/airpods.jpg';
// import Bags from '../assests/images/bags.jpg';
// import Shirt from '../assests/images/shirts.jpg';
import productsData from './data.json';
const Products = () => {
  //console.log("productsData",productsData)
 
  // const productsData = [
  //   {
  //     image: Accessories,
  //     title: 'I-Phone Back Covers',
  //     price: '1500',
  //   },
  //   {
  //     image: Mobile,
  //     title: 'I-Phone 13 Pro Max',
  //     price: '300000',
  //   },
  //   {
  //     image: Airpods,
  //     title: 'Air Pods Pro (Anc)',
  //     price: '3000',
  //   },
  //   {
  //     image: Bags,
  //     title: 'Ladies Hand Bags',
  //     price: '4000',
  //   },
  //   {
  //     image: Shirt,
  //     title: "Men's T-Shirts",
  //     price: '1000',
  //   },
  // ];

  return (
    <div>
      <div className='products-text'>
        <h1>Featured Products</h1>
      </div>

      <div className="featured-products">

        {productsData.map((product, index) => {
          console.log("PRODUCT",product)
                    
         return (
          <div className="product-card" key={index}>
            <Link to={`/products?productId=${product.id}`} className='product-link'>
            {/* <Link to={{ pathname: `/products/${product.id}`, state: { product } }}  className='product-link'>   */}
              <img src={product.image} alt={`Product ${index + 1}`} className="product-image"/>
              <h3 className="product-title">{product.title}</h3>
              <p>{product.description}</p>
              <p className="product-description">Price: {product.price}</p>
            </Link>
          </div>
        )})}
      </div>
    </div>
  );
};

export default Products;

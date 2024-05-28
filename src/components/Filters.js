// import React from 'react'
// import Mobile from '../assests/images/mobile.jpg';
// import Accessories from '../assests/images/accessories.jpg';
// import Airpods from '../assests/images/airpods.jpg';
// import Bags from '../assests/images/bags.jpg';
// import Shirt from '../assests/images/shirts.jpg';

// const Filters = () => {
//   return (
//     <div>
//       <div className="container-products">
//   <div className="sidebar">
//     <h3>Search Bar</h3>
//     <input type="text" placeholder="Search..." className="search-input" />
//     <div className="filter-section">
//       <h3>Category</h3>
//       <select>
//         <option value="all">All</option>
//         <option value="clothing">Clothing</option>
//         <option value="electronics">Electronics</option>
//         <option value="accessories">Accessories</option>
//       </select>
//     </div>
//     <div className="filter-section">
//       <h3>Price Range</h3>
//       <select>
//         <option value="all">All</option>
//         <option value="0-50">$0 - $50</option>
//         <option value="50-100">$50 - $100</option>
//         <option value="100-200">$100 - $200</option>
//       </select>
//     </div>
//   </div>


//   <div className="grid-container">

//   <div className="grid-item">
//      <div className="card">
//        <img src={Accessories} alt="Product 1" className="product-image" />
//        <div className="product-details">
//          <h3>Mobilr Back Covers</h3>
//          <p>Description of the product goes here...</p>
//          <p>Price: $150</p>
//        </div>
//      </div>
//    </div>
//    <div className="grid-item">
//      <div className="card">
//        <img src={Mobile} alt="Product 1" className="product-image" />
//        <div className="product-details">
//          <h3>I-Phone 15Pro Max</h3>
//          <p>Description of the product goes here...</p>
//          <p>Price: $1200</p>
//        </div>
//      </div>
//    </div>
//    <div className="grid-item">
//      <div className="card">
//        <img src={Airpods} alt="Product 1" className="product-image" />
//        <div className="product-details">
//          <h3>Airpods Pro</h3>
//          <p>Description of the product goes here...</p>
//          <p>Price: $20</p>
//        </div>
//      </div>
//    </div>
//    <div className="grid-item">
//      <div className="card">
//        <img src={Bags} alt="Product 1" className="product-image" />
//        <div className="product-details">
//          <h3>Ladies Hands Bags</h3>
//          <p>Description of the product goes here...</p>
//          <p>Price: $50</p>
//        </div>
//      </div>
//    </div>
//    <div className="grid-item">
//      <div className="card">
//        <img src={Shirt} alt="Product 1" className="product-image" />
//        <div className="product-details">
//          <h3>Men's T-Shirts</h3>
//          <p>Description of the product goes here...</p>
//          <p>Price: $12</p>
//        </div>
//      </div>
//    </div>

   
//   <div className="grid-item">
//      <div className="card">
//        <img src={Accessories} alt="Product 1" className="product-image" />
//        <div className="product-details">
//          <h3>Mobilr Back Covers</h3>
//          <p>Description of the product goes here...</p>
//          <p>Price: $150</p>
//        </div>
//      </div>
//    </div>
//    <div className="grid-item">
//      <div className="card">
//        <img src={Mobile} alt="Product 1" className="product-image" />
//        <div className="product-details">
//          <h3>I-Phone 15Pro Max</h3>
//          <p>Description of the product goes here...</p>
//          <p>Price: $1200</p>
//        </div>
//      </div>
//    </div>
//    <div className="grid-item">
//      <div className="card">
//        <img src={Airpods} alt="Product 1" className="product-image" />
//        <div className="product-details">
//          <h3>Airpods Pro</h3>
//          <p>Description of the product goes here...</p>
//          <p>Price: $20</p>
//        </div>
//      </div>
//    </div>
//    <div className="grid-item">
//      <div className="card">
//        <img src={Bags} alt="Product 1" className="product-image" />
//        <div className="product-details">
//          <h3>Ladies Hands Bags</h3>
//          <p>Description of the product goes here...</p>
//          <p>Price: $50</p>
//        </div>
//      </div>
//    </div>
//    <div className="grid-item">
//      <div className="card">
//        <img src={Shirt} alt="Product 1" className="product-image" />
//        <div className="product-details">
//          <h3>Men's T-Shirts</h3>
//          <p>Description of the product goes here...</p>
//          <p>Price: $12</p>
//        </div>
//      </div>
//    </div>

//    <div className="grid-item">
//      <div className="card">
//        <img src={Accessories} alt="Product 1" className="product-image" />
//        <div className="product-details">
//          <h3>Mobilr Back Covers</h3>
//          <p>Description of the product goes here...</p>
//          <p>Price: $150</p>
//        </div>
//      </div>
//    </div>
//    <div className="grid-item">
//      <div className="card">
//        <img src={Mobile} alt="Product 1" className="product-image" />
//        <div className="product-details">
//          <h3>I-Phone 15Pro Max</h3>
//          <p>Description of the product goes here...</p>
//          <p>Price: $1200</p>
//        </div>
//      </div>
//    </div>
  
//   </div>
// </div>

//     </div>
//   )
// }

// export default Filters



import React from 'react';
import Accessories from '../assests/images/accessories.jpg';
import Mobile from '../assests/images/mobile.jpg';
import Airpods from '../assests/images/airpods.jpg';
import Bags from '../assests/images/bags.jpg';
import Shirt from '../assests/images/shirts.jpg';

const Filters = () => {

  const products = [
    { image: Accessories, title: 'Mobile Back Covers', description: 'Description of the product goes here...', price: '$150' },
    { image: Mobile, title: 'I-Phone 15 Pro Max', description: 'Description of the product goes here...', price: '$1200' },
    { image: Airpods, title: 'Airpods Pro', description: 'Description of the product goes here...', price: '$20' },
    { image: Bags, title: 'Ladies Hand Bags', description: 'Description of the product goes here...', price: '$50' },
    { image: Shirt, title: "Men's T-Shirts", description: 'Description of the product goes here...', price: '$12' },
    { image: Accessories, title: 'Mobile Back Covers', description: 'Description of the product goes here...', price: '$150' },
    { image: Mobile, title: 'I-Phone 15 Pro Max', description: 'Description of the product goes here...', price: '$1200' },
    { image: Airpods, title: 'Airpods Pro', description: 'Description of the product goes here...', price: '$20' },
    { image: Bags, title: 'Ladies Hand Bags', description: 'Description of the product goes here...', price: '$50' },
    { image: Shirt, title: "Men's T-Shirts", description: 'Description of the product goes here...', price: '$12' },
    { image: Accessories, title: 'Mobile Back Covers', description: 'Description of the product goes here...', price: '$150' },
    { image: Mobile, title: 'I-Phone 15 Pro Max', description: 'Description of the product goes here...', price: '$1200' },
  ];

  return (
    <div>
      <div className="container-products">
        <div className="sidebar">
          <h3 className='font-search'>Search Bar</h3>
          <input type="text" placeholder="Search..." className="search-input" />
          <div className="filter-section">
            <h3 className='font-search'>Category</h3>
            <select>
              <option value="all">All</option>
              <option value="clothing">Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div className="filter-section">
            <h3 className='font-search'>Price Range</h3>
            <select>
              <option value="all">All</option>
              <option value="0-50">$0 - $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100-200">$100 - $200</option>
            </select>
          </div>
        </div>

        <div className="grid-container">
       
          {products.map((product, index) => (
            <div className="grid-item" key={index}>
              <div className="card">
                <img src={product.image} alt={`Product ${index + 1}`} className="product-image" />
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Price: {product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;

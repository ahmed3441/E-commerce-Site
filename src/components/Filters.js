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







import React, { useEffect, useState } from "react";
import Accessories from "../assests/images/accessories.jpg";
import Mobile from "../assests/images/mobile.jpg";
import Airpods from "../assests/images/airpods.jpg";
import Bags from "../assests/images/bags.jpg";
import Shirt from "../assests/images/shirts.jpg";
import { useDispatch } from "react-redux";
import { addItemToCart } from '../features/CartSlice';

const Filters = () => {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const products = [
    {
      id: 6,
      image: Accessories,
      title: "Mobile Back Covers",
      description: "Description of the product goes here...",
      category: "accessories",
      price: 150,
    },
    {
      id: 7,
      image: Mobile,
      title: "I-Phone 15 Pro Max",
      description: "Description of the product goes here...",
      category: "mobiles",
      price: 1200,
    },
    {
      id: 8,
      image: Airpods,
      title: "Airpods Pro",
      description: "Description of the product goes here...",
      category: "accessories",
      price: 20,
    },
    {
      id: 9,
      image: Bags,
      title: "Ladies Hand Bags",
      description: "Description of the product goes here...",
      category: "bags",
      price: 50,
    },
    {
      id: 10,
      image: Shirt,
      title: "Men's T-Shirts",
      description: "Description of the product goes here...",
      category: "clothing",
      price: 12,
    },
    {
      id: 11,
      image: Accessories,
      title: "Mobile Back Covers",
      description: "Description of the product goes here...",
      category: "accessories",
      price: 150,
    },
    {
      id: 12,
      image: Mobile,
      title: "I-Phone 15 Pro Max",
      description: "Description of the product goes here...",
      category: "mobiles",
      price: 1200,
    },
    {
      id: 13,
      image: Airpods,
      title: "Airpods Pro",
      description: "Description of the product goes here...",
      category: "accessories",
      price: 20,
    },
    {
      id: 14,
      image: Bags,
      title: "Ladies Hand Bags",
      description: "Description of the product goes here...",
      category: "bags",
      price: 50,
    },
    {
      id: 15,
      image: Shirt,
      title: "Men's T-Shirts",
      description: "Description of the product goes here...",
      category: "clothing",
      price: 12,
    },
    {
      id: 16,
      image: Accessories,
      title: "Mobile Back Covers",
      description: "Description of the product goes here...",
      category: "accessories",
      price: 150,
    },
    {
      id: 17,
      image: Mobile,
      title: "I-Phone 15 Pro Max",
      description: "Description of the product goes here...",
      category: "mobiles",
      price: 1200,
    },
  ];
  
  const [filteredArray, setFilteredArray] = useState(products);

  useEffect(() => {
    const results = products.filter((product) => {
      const matchesSearch = product?.title
        ?.toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesCategory =
        category === "all" || product?.category === category;
      const matchesPrice =
        priceRange === "all" ||
        (product.price >= priceRange.split("-")[0] &&
          product.price <= priceRange.split("-")[1]);

      return matchesSearch && matchesCategory && matchesPrice;
    });
    setFilteredArray(results);
  }, [searchValue, category, priceRange]);

const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    const users = localStorage.getItem('users');
  
    if (!users) {
      alert('Please Login First If You Want Items Add to Cart');
    } else {
      console.log("product:::", product);
      dispatch(addItemToCart(product));
      console.log("Item added to cart:", product);
    }
  };








  return (
    <div>
      <div className="container-products">
        <div className="sidebar">
          <h3 className="font-search">Search Bar</h3>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <div className="filter-section">
            <h3 className="font-search">Category</h3>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All</option>
              <option value="clothing">Clothing</option>
              <option value="mobiles">Mobiles</option>
              <option value="accessories">Accessories</option>
              <option value="bags">Bags</option>
            </select>
          </div>
          <div className="filter-section">
            <h3 className="font-search">Price Range</h3>
            <select onChange={(e) => setPriceRange(e.target.value)}>
              <option value="all">All</option>
              <option value="0-100">$0 - $100</option>
              <option value="101-200">$101 - $200</option>
              <option value="1000-1500">$1000 - $1500</option>
            </select>
          </div>
        </div>

        <div className="grid-container">
          {(filteredArray || []).map((product, index) => (
            <div className="grid-item" key={index}>
              <div className="card">
                <img
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  className="product-image"
                />
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <button className='button-alignment' onClick={() => handleAddToCart(product)}>ADD TO CART</button>
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

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

const Filters = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log("Serch BAr", searchValue);

  const [category, setCategory] = useState("all");

  // const [price, setPrices] = useState ('all');

  const products = [
    {
      image: Accessories,
      title: "Mobile Back Covers",
      description: "Description of the product goes here...",
      category: "accessories",
      price: "$150",
    },
    {
      image: Mobile,
      title: "I-Phone 15 Pro Max",
      description: "Description of the product goes here...",
      category: "mobiles",
      price: "$1200",
    },
    {
      image: Airpods,
      title: "Airpods Pro",
      description: "Description of the product goes here...",
      category: "accessories",
      price: "$20",
    },
    {
      image: Bags,
      title: "Ladies Hand Bags",
      description: "Description of the product goes here...",
      category: "bags",
      price: "$50",
    },
    {
      image: Shirt,
      title: "Men's T-Shirts",
      description: "Description of the product goes here...",
      category: "clothing",
      price: "$12",
    },
    {
      image: Accessories,
      title: "Mobile Back Covers",
      description: "Description of the product goes here...",
      category: "accessories",
      price: "$150",
    },
    {
      image: Mobile,
      title: "I-Phone 15 Pro Max",
      description: "Description of the product goes here...",
      category: "mobiles",
      price: "$1200",
    },
    {
      image: Airpods,
      title: "Airpods Pro",
      description: "Description of the product goes here...",
      category: "accessories",
      price: "$20",
    },
    {
      image: Bags,
      title: "Ladies Hand Bags",
      description: "Description of the product goes here...",
      category: "bags",
      price: "$50",
    },
    {
      image: Shirt,
      title: "Men's T-Shirts",
      description: "Description of the product goes here...",
      category: "clothing",
      price: "$12",
    },
    {
      image: Accessories,
      title: "Mobile Back Covers",
      description: "Description of the product goes here...",
      category: "accessories",
      price: "$150",
    },
    {
      image: Mobile,
      title: "I-Phone 15 Pro Max",
      description: "Description of the product goes here...",
      category: "mobiles",
      price: "$1200",
    },
  ];

  const [filteredArray, setFilteredArray] = useState();

  let FilterData = [];
  console.log("FilterData::::::", FilterData);

  // const priceRangeHandler = () => {
  //   // Filter products based on the price range
  //   FilterData = products.filter((item) => {
  //     // Convert the price to a number by removing the "$" sign and converting to integer
  //     const price = parseInt(item.price.replace("$", ""), 10);
  //     // Check if the price is less than or equal to 250
  //     return price <= 250;
  //   });
  // };
  const priceRangeHandler = (range) => {
    let minPrice = 0;
    let maxPrice = Infinity;

    // Determine minPrice and maxPrice based on the selected range
    switch (range) {
      case "0-100":
        maxPrice = 100;
        break;
      case "101-200":
        minPrice = 101;
        maxPrice = 200;
        break;
      case "1000-1500":
        minPrice = 1000;
        maxPrice = 1500;
        break;
      default:
        break;
    }

    const filteredProducts = products.filter((product) => {
      const price = parseInt(product.price.replace("$", ""), 10);
      return price >= minPrice && price <= maxPrice;
    });

    // Update the filterArray state with the filtered products
    setFilteredArray(filteredProducts);
  };

  const [filterArray, setFilterArray] = useState(products);
  console.log("Filters Category", filterArray);

  useEffect(() => {
    const results = products.filter((product) => {
      const matchesSearch = product?.title
        ?.toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesCategory =
        category === "all" || product?.category === category;

      return matchesSearch && matchesCategory;
    });
    setFilterArray(results);
  }, [searchValue, category]);

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
            <select onChange={(e) => priceRangeHandler(e.target.value)}>
              <option value="all">All</option>
              <option value="0-100">$0 - $100</option>
              <option value="101-200">$101 - $200</option>
              <option value="1000-1500">$1000 - $1500</option>
            </select>
          </div>
        </div>

        <div className="grid-container">
          {(filterArray || []).map((product, index) => (
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

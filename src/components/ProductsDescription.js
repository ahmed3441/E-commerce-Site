// import React from 'react'
// import Accessories from '../assests/images/accessories.jpg';

// const ProductsDescription = () => {
//   return (
//     <div>
//         <div className='card-alignment'>
//         <div className="products-card">
//   <div className="product-image">
//     <img src={Accessories} alt="ProductImage" className='product-details'></img>
//   </div>
//   <div className="product-description">
//     <h3>I-Phone 15 Pro Max Back Cover</h3>
//     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> Lorem Ipsum has been
//      the industry's standard dummy text ever since the 1500s <br/> When an unknown printer took a galley of type and scrambled it to make a type specimen book.
//      </p>
//     <p>Price: Rs. 1500</p>
//     <button className='button-alignment'>ADD TO CART</button>
//   </div>
// </div>
// </div>
//     </div>
//   )
// }

// export default ProductsDescription






// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import productsData from './data.json';


// const ProductDetails = () => {
//   const  productId  = useSearchParams(); 
//   console.log("PRODUCT ID",productId);
//   const [product, setProduct] = useState(null);
  
//   useEffect(() => {
//     const foundProduct = productsData.find(item => item.id === productId);

//     if (foundProduct) {
//       setProduct(foundProduct); 
//     } else {
//       console.error('Product not found');
//     }
//   }, [productId]);

//   return (
//     <div>
//       <h1>Product Details</h1>
//       {product ? (
//         <div>
//           <h2>{product.title}</h2>
//           <p>Price: {product.price}</p>
//           <img src={product.image} alt={product.title} />
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import productsData from './data.json';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/CartSlice';

const ProductDetails = () => {
  const [searchParams] = useSearchParams(); 
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const productId = searchParams.get('productId');
    console.log("PRODUCT ID", productId);

    const foundProduct = productsData.find(item => item.id.toString() === productId);
    if (foundProduct) {
      setProduct(foundProduct); 
    } else {
      console.error('Product not found');
    }
  }, [searchParams]);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    console.log("Item added to cart:", product);
  };

  return (
    <div> 
      {product ? (
        <div key={product.id} className='card-alignment'>
          <div className="products-card">
            <div className="product-image">
              <img src={product.image} alt="ProductImage" className='product-details'></img>
            </div>
            <div className="product-description">
              <h3>{product.title}</h3>
              <p>Price: Rs. {product.price}</p>
              <p>{product.description}</p>
              <button className='button-alignment' onClick={() => handleAddToCart(product)}>ADD TO CART</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default ProductDetails;




// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addItemToCart } from '../features/CartSlice';
// import Accessories from '../assests/images/accessories.jpg';
// import { useSearchParams } from 'react-router-dom';


// const ProductsDescription = () => {
//   const params =useSearchParams()
//   console.log("params:::",params)
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addItemToCart({
//       id: 1, 
//       name: "I-Phone 15 Pro Max Back Cover",
//       price: 1500,
//     }));

//     console.log("Item added to cart:", {
//       id: 1, 
//       name: "I-Phone 15 Pro Max Back Cover",
//       price: 1500,
//     });
//   };
  
//   return (
//     <div>
//       <div className='card-alignment'>
//         <div className="products-card">
//           <div className="product-image">
//             <img src={Accessories} alt="ProductImage" className='product-details'></img>
//           </div>
//           <div className="product-description">
//             <h3>I-Phone 15 Pro Max Back Cover</h3>
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s <br/> When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//             <p>Price: Rs. 1500</p>
//             <button className='button-alignment' onClick={handleAddToCart}>ADD TO CART</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductsDescription;

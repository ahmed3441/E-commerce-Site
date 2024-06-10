// import React from 'react';
// import { useDispatch, useSelector} from 'react-redux';
// import { removeItemFromCart, decreaseItemFromCart, increaseItemFromCart } from '../features/CartSlice';

// const Cart = () => {
//   const cart = useSelector((state) => state.cart.cart);
//   console.log(cart);
//   const dispatch = useDispatch();


//   const handleRemoveItem = (id) => {
//     console.log("Removing item with id:", id); 
//     dispatch(removeItemFromCart({ id }));
//   };

//   const handleDecreaseQuantity = (id) => {
//     console.log("Decreasing quantity of item with id:", id);
//     dispatch(decreaseItemFromCart({ id }));
//   }

//   const handleIncreaseQuantity = (id) => {
//     console.log("Increasing quantity of item with id:", id);
//     dispatch(increaseItemFromCart({ id }));
//   }

  
//   return (
//     <div className='cart-container'>
//       <h1>My Cart</h1>
//       {cart.length === 0 ? (
//         <p>Empty Cart</p>
//       ) : (
//         <div className='cart-items'>
//           {cart.map((item) => (
            
//             <div key={item.id} className='cart-item'>
//               <h3>Name: {item.title}</h3>
//               <img src={item.image} alt={item.title} />
//               <p>Price: ${item.price}</p>

//               <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
//               <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
//               <button onClick={() => handleRemoveItem(item.id)}>Delete Item</button>
//             </div>
             
//           ))}
        
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, decreaseItemFromCart, increaseItemFromCart } from '../features/CartSlice'; // Corrected action names

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    console.log("Removing item with id:", id); 
    dispatch(removeItemFromCart({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    console.log("Decreasing quantity of item with id:", id);
    dispatch(decreaseItemFromCart({ id })); 
  }

  const handleIncreaseQuantity = (id) => {
    console.log("Increasing quantity of item with id:", id);
    dispatch(increaseItemFromCart({ id }));
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className='cart-container'>
      <h1>My Cart</h1>
      {cart.length === 0 ? (
        <p>Empty Cart</p>
      ) : (
        <div className='cart-items'>
          {cart.map((item) => (
            <div key={item.id} className='cart-item'>
              <h3>Name: {item.title}</h3>
              <img src={item.image} alt={item.title} />
              <p>Price: ${item.price}</p>

              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              <button onClick={() => handleRemoveItem(item.id)}>Delete Item</button>
            </div>
          ))}
          <div className='cart-total'>
            <h2>Total Price: ${getTotalPrice()}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


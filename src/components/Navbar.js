import React, { useState } from 'react';
import logo from '../assests/images/logo.jpeg';
import { useSelector } from 'react-redux';

function App() {
  const [showMenu, setShowMenu] = useState(false);

   const cart = useSelector((state) => state.cart.cart.length);
   console.log("CART DATA",cart);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
                                                                                                                                                                     
  return (
    <div className="App">
      <nav className="navbar">
        <div className='logo-alignment'>
        <button className="navbar-toggle" onClick={toggleMenu}>
          {showMenu ? '-' : '+'}
        </button>

        <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        
        <ul className={`navbar-menu ${showMenu ? 'show' : ''}`}>
       
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Contact</a></li>
          <button className='cart-button'>CART({cart})</button>
          <li className="close-btn" onClick={closeMenu}>Close</li>
        </ul>

       
  
       
      </nav>
      <div className="content">
        {/* Your content here */}
      </div>
    </div>
  );
}

export default App;

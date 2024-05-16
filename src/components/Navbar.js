import React, { useState } from 'react';
import logo from '../assests/images/logo.jpeg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
       
        <li><Link to='/'>Home</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/'>Services</Link></li>
      <li><Link to='/'>Contact</Link></li>
          <button className='cart-button'>CART({cart})</button>
          <li className="close-btn" onClick={closeMenu}>Close</li>
        </ul>  
        
      </nav>
      <div className="content">
      
      </div>
    </div>
  );
}
export default App;

// import React from 'react'
// import logo from '../assests/images/logo.jpeg';
// import { Link } from 'react-router-dom';

// const Navbar = () => {

//   return (
//     <div>
//       <div className='container-navbar'>
//         <nav className="navbar">
//         <div className="navbar-brand">
//         <img src={logo} alt="Logo" className="navbar-logo" />
//       </div>
//       <ul className="navbar-menu">
//         <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li> 
//         <li className="navbar-item"><Link to="/products" className="navbar-link">Products</Link></li> 
//         <li className="navbar-item"><a href="#services" className="navbar-link">Services</a></li>
//         <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
//       </ul>
//     </nav>

//     </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import logo from '../assests/images/logo.jpeg';

function App() {
  const [showMenu, setShowMenu] = useState(false);

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

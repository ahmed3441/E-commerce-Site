import React, {useState } from 'react';
import logo from '../assests/images/logo.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PersonImage from '../assests/images/person.png'
import { clearCart } from '../features/CartSlice';

function App() {

  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

   const cart = useSelector((state) => state);
   console.log("CART DATA",cart);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleCartClick=()=> {
    navigate('/cartitems');
  }

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };
  //get localstorage data
  const users = JSON.parse(localStorage.getItem('users'));
  console.log("USER DATA:::::", users);

 
    const storedUser = JSON.parse(localStorage.getItem('users'));
      console.log("LOGIN USER", storedUser);

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

      {storedUser ? (
  <>
    <li>
      <span className='cart-button' onClick={handleCartClick}>
        CART({cart.cart.cart.length})
      </span>
    </li>
    <li>
      <span onClick={() => {
        navigate('/');
        localStorage.removeItem('users');
        dispatch(clearCart());
        setDropdownVisible(!dropdownVisible);
      }}>
        Logout
      </span>
    </li>
    <li><span onClick={()=>{navigate('/customerform')}}>Add User</span></li>
  </>
) : (
  <li><Link to='/signin'>Sign-In</Link></li>
)}


      <div className="dropdown">
      <img src={PersonImage} className="person-img-size" alt="Profile"  onClick={dropdownToggle} />
      {/* {dropdownVisible && (
        <div className="dropdown-menu">
          <button className='cart-button' onClick={handleCartClick} >CART({cart.cart.cart.length})</button> <br/>
          <button onClick={()=>{
            navigate('/');
            localStorage.removeItem('users');
            dispatch(clearCart());
            setDropdownVisible(!dropdownVisible);
          }}>Logout</button>
        </div>
      )
      } */}
    </div>
    <span>&nbsp; &nbsp;{storedUser?.[0]?.name || ""} </span>
          {/* <button className='cart-button'>CART({cart.cart.cart.length})</button> */}
          <li className="close-btn" onClick={closeMenu}>Close</li>
        </ul>  
        
      </nav>
      <div className="content">
      
      </div>
    </div>
  );
}
export default App;

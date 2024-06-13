// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import ProductsDetails from './pages/ProductsDetails';
// import Signup from './pages/Signup';
// import Signin from './pages/Signin';
// // import CartPage from './pages/CartPage';
// import PrivateRoute from './components/Auth';

// function App() {

//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route exact path="/signin" element={<Signin />} />
//           <Route exact path="/signup" element={<Signup />} />
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/products" element={<ProductsDetails/>} />
//            <Route exact path="/cartitems" element= {<PrivateRoute isAuth={false} /> }/> 
//           </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductsDetails from './pages/ProductsDetails';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import CartPage from './pages/CartPage';
import CustomerFormPage from './pages/CustomerFormPage';
import AllUsers from './pages/AllUsersPage';
import PrivateRoute from './components/Auth';
// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';

function App() {
  // const [data,setData]=useState(null)
  // const cart = useSelector((state) => state);
  // useEffect(() => setData(data))
  //  console.log("CART DATA ",data);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsDetails />} />
          <Route element={<PrivateRoute />}>
            <Route path="/cartitems" element={<CartPage />} />
            <Route path="/customerform" element={<CustomerFormPage />} />
            <Route path="/allusers" element={<AllUsers />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

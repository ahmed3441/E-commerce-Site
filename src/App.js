import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductsDetails from './pages/ProductsDetails';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ProductsDetails/>} />
          <Route exact path="/cartitems" element={<CartPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;


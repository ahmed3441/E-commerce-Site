import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductsDetails from './pages/ProductsDetails';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ProductsDetails/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;


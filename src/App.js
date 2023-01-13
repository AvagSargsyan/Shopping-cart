import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

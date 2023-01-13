import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Error from './pages/Error';
import { AppContainer } from './App.style';

function App() {
  return (
    <AppContainer>
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;

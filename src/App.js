import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Error from './pages/Error';
import { AppContainer } from './App.style';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import ProductDetails from './pages/ProductDetails';

const theme = {
  colors: {
    dark: '#222',
    light: '#eee',
    darkerLight: '#ddd',
    lighterDark: '#333',
    primary: '#cc9349'
  }
}

function App() {

  return (
    <ThemeProvider theme={theme} >
      <AppContainer>
        <Router>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

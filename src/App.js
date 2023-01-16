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
import { useReducer } from 'react';
import { ACTIONS, reducer } from './reducer/appReducer';
import useProductsData from './hooks/useProductsData';

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

  const initialState = {
    displayCart: true,
    loading: true,
    error: '',
    products: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useProductsData('https://fakestoreapi.com/products', dispatch);

  const toggleCart = () => {
    dispatch({
      type: ACTIONS.TOGGLE_CART
    });
  }

  return (
    <ThemeProvider theme={theme} >
      <AppContainer>
        <Router>
          <GlobalStyles />
          <Header displayCart={state.displayCart} products={state.products} toggleCart={toggleCart} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products products={state.products} loading={state.loading} error={state.error} />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

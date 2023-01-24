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
    displayCart: false,
    loading: true,
    error: false,
    products: [],
    totalCartPrice: 0
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useProductsData('https://fakestoreapi.com/products', dispatch);

  const toggleCart = () => {
    dispatch({
      type: ACTIONS.TOGGLE_CART
    });
  }

  const incrementCount = (productId) => {
    dispatch({
      type: ACTIONS.INCREMENT_COUNT,
      payload: {
        id: productId,
      }
    });
  }

  const decrementCount = (productId) => {
    dispatch({
      type: ACTIONS.DECREMENT_COUNT,
      payload: {
        id: productId,
      }
    });
  }

  const resetCount = (productId, newCount) => {
    dispatch({
      type: ACTIONS.RESET_COUNT,
      payload: {
        id: productId,
        newCount: newCount
      }
    })
  }

  const addCount = (productId, newCount) => {
    dispatch({
      type: ACTIONS.ADD_COUNT,
      payload: {
        id: productId,
        newCount: newCount
      }
    })
  }

  const emptyCart = () => {
    dispatch({
      type: ACTIONS.EMPTY_CART
    })
  }

  return (
    <ThemeProvider theme={theme} >
      <AppContainer>
        <Router>
          <GlobalStyles />
          <Header
            displayCart={state.displayCart}
            products={state.products}
            toggleCart={toggleCart}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
            emptyCart={emptyCart}
          />
          <Routes>
            <Route path="/shopping-cart/" element={<Home />} />
            <Route path="/shopping-cart/about" element={<About />} />
            <Route path="/shopping-cart/products" element={<Products
              incrementCount={incrementCount}
              products={state.products}
              loading={state.loading}
              error={state.error} />}
            />
            <Route path="/shopping-cart/products/:id" element={<ProductDetails addCount={addCount} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

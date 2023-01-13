import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Error from './pages/Error';
import { AppContainer } from './App.style';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    font: '#222',
    background: '#eee'
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
            <Route path="" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

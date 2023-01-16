import { Link } from 'react-router-dom';
import Cart from './Cart';
import CartButton from './CartButton';
import { StyledHeader, StyledNavbar } from './styles/Header.style';

const Header = ({ displayCart, products, toggleCart }) => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">FakeStore</Link>
      </h1>
      <StyledNavbar>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <CartButton toggleCart={toggleCart} />
        {displayCart && <Cart products={products} toggleCart={toggleCart} />}
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;

import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import { StyledHeader, StyledNavbar } from './styles/Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">FakeStore</Link>
      </h1>
      <StyledNavbar>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <CartButton />
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;

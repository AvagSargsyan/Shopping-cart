import { Link } from 'react-router-dom';
import CartButton from './CartButton';
import { StyledHeader } from './styles/Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">FakeStore</Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <CartButton />
      </nav>
    </StyledHeader>
  );
};

export default Header;

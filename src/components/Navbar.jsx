import { Link } from 'react-router-dom';
import CartButton from './CartButton';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <Link to="/">FakeStore</Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <CartButton />
      </nav>
    </div>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';
import Cart from './Cart';
import CartButton from './CartButton';
import { StyledCover, StyledHeader, StyledNavbar } from './styles/Header.style';

const Header = ({
  displayCart,
  products,
  toggleCart,
  incrementCount,
  decrementCount,
  resetCount,
  emptyCart,
}) => {
  const cartItems = products.filter((product) => product.count > 0);

  const itemsCount = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <StyledHeader>
      <h1>
        <Link to="/shopping-cart/">FakeStore</Link>
      </h1>
      <StyledNavbar>
        <Link to="/shopping-cart/">Home</Link>
        <Link to="/shopping-cart/products">Products</Link>
        <Link to="/shopping-cart/about">About</Link>
        <CartButton toggleCart={toggleCart} itemsCount={itemsCount} />
        {displayCart && (
          <>
            <Cart
              cartItems={cartItems}
              toggleCart={toggleCart}
              incrementCount={incrementCount}
              decrementCount={decrementCount}
              resetCount={resetCount}
              emptyCart={emptyCart}
            />
            <StyledCover onClick={toggleCart}></StyledCover>
          </>
        )}
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;

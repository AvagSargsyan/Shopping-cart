import { FaTimes } from 'react-icons/fa';
import { StyledPrice } from '../pages/styles/ProductDetails.style';
import CartItem from './CartItem';
import {
  StyledCart,
  StyledCloseButton,
  StyledItemsSection,
} from './styles/Cart.style';
import { StyledButton } from './styles/ProductCard.style';

const Cart = ({ products, toggleCart, incrementCount, decrementCount }) => {
  let cartItems = products.filter((product) => product.count > 0);

  return (
    <StyledCart>
      <StyledCloseButton onClick={toggleCart}>
        <FaTimes />
      </StyledCloseButton>
      <h2>Your Shopping Cart</h2>
      <StyledItemsSection>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              incrementCount={incrementCount}
              decrementCount={decrementCount}
            />
          ))
        ) : (
          <div>Your cart is empty.</div>
        )}
      </StyledItemsSection>
      <StyledPrice>Total: $100</StyledPrice>
      <StyledButton>Empty Cart</StyledButton>
    </StyledCart>
  );
};

export default Cart;

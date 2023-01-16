import { FaTimes } from 'react-icons/fa';
import { StyledPrice } from '../pages/styles/ProductDetails.style';
import CartItem from './CartItem';
import {
  StyledCart,
  StyledCloseButton,
  StyledItemsSection,
} from './styles/Cart.style';
import { StyledButton } from './styles/ProductCard.style';

const Cart = ({ products, toggleCart }) => {
  let cartItems = products;
  return (
    <StyledCart>
      <StyledCloseButton onClick={toggleCart}>
        <FaTimes />
      </StyledCloseButton>
      <h2>Your Shopping Cart</h2>
      {/* <StyledItemsSection>
        {cartItems.map((item) => (
          <CartItem product={item} key={item.id} />
        ))}
      </StyledItemsSection> */}
      <StyledPrice>Total: $100</StyledPrice>
      <StyledButton>Empty Cart</StyledButton>
    </StyledCart>
  );
};

export default Cart;

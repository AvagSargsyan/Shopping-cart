import { FaTimes } from 'react-icons/fa';
import { StyledPrice } from '../pages/styles/ProductDetails.style';
import CartItem from './CartItem';
import {
  StyledCart,
  StyledCloseButton,
  StyledItemsSection,
} from './styles/Cart.style';
import { StyledButton } from './styles/ProductCard.style';

const Cart = ({
  products,
  toggleCart,
  incrementCount,
  decrementCount,
  resetCount,
  emptyCart,
}) => {
  const cartItems = products.filter((product) => product.count > 0);
  const totalCartPrice = cartItems.reduce(
    (acc, item) => acc + item.totalPrice,
    0
  );

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
              resetCount={resetCount}
              toggleCart={toggleCart}
            />
          ))
        ) : (
          <div>Your cart is empty.</div>
        )}
      </StyledItemsSection>
      <StyledPrice>Total: ${totalCartPrice.toFixed(2)}</StyledPrice>
      <StyledButton onClick={() => cartItems.length > 0 && emptyCart()}>
        Empty Cart
      </StyledButton>
    </StyledCart>
  );
};

export default Cart;

import { FaShoppingCart } from 'react-icons/fa';
import { StyledCartButton } from './styles/CartButton.style';

const CartButton = ({ toggleCart }) => {
  return (
    <StyledCartButton onClick={toggleCart}>
      <FaShoppingCart />
    </StyledCartButton>
  );
};

export default CartButton;

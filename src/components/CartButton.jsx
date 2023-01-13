import { FaShoppingCart } from 'react-icons/fa';
import { StyledCartButton } from './styles/CartButton.style';

const CartButton = () => {
  return (
    <StyledCartButton>
      <FaShoppingCart />
    </StyledCartButton>
  );
};

export default CartButton;

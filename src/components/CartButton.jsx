import { FaShoppingCart } from 'react-icons/fa';
import { StyledCartButton } from './styles/CartButton.style';

const CartButton = ({ toggleCart, itemsCount }) => {
  console.log(itemsCount);
  return (
    <StyledCartButton onClick={toggleCart}>
      <FaShoppingCart />
      {itemsCount > 0 && (
        <div>
          <span>{itemsCount}</span>
        </div>
      )}
    </StyledCartButton>
  );
};

export default CartButton;

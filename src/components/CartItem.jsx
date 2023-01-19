import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StyledCountButton } from '../pages/styles/ProductDetails.style';
import shortenText from '../utilities/shortenText';
import { StyledCartItem } from './styles/CartItem.style';

const CartItem = ({ product, incrementCount, decrementCount, resetCount }) => {
  return (
    <StyledCartItem>
      <img src={product.image} alt={product.title} />
      <div>
        <Link to={`/products/${product.id}`}>
          {shortenText(product.title, 47)}
        </Link>
        <p>${product.totalPrice}</p>
        <div>
          <StyledCountButton onClick={() => decrementCount(product.id)}>
            <FaMinus />
          </StyledCountButton>
          <span>{product.count}</span>
          <StyledCountButton onClick={() => incrementCount(product.id)}>
            <FaPlus />
          </StyledCountButton>
        </div>
      </div>
      <button onClick={() => resetCount(product.id, 0)}>
        <FaTimes />
      </button>
    </StyledCartItem>
  );
};

export default CartItem;

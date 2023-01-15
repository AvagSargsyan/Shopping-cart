import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StyledCountButton } from '../pages/styles/ProductDetails.style';
import shortenText from '../utilities/shortenText';
import { StyledCartItem } from './styles/CartItem.style';

const CartItem = ({ product }) => {
  return (
    <StyledCartItem>
      <img src={product.image} alt={product.title} />
      <div>
        <Link to={`/products/${product.id}`}>
          {shortenText(product.title, 47)}
        </Link>
        <p>${product.price}</p>
        <div>
          <StyledCountButton>
            <FaMinus />
          </StyledCountButton>
          <span>0</span>
          <StyledCountButton>
            <FaPlus />
          </StyledCountButton>
        </div>
      </div>
      <button>
        <FaTimes />
      </button>
    </StyledCartItem>
  );
};

export default CartItem;

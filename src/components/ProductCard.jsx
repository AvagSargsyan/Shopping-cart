import { Link } from 'react-router-dom';
import { StyledButton, StyledProductCard } from './styles/ProductCard.style';

const ProductCard = ({ product }) => {
  return (
    <StyledProductCard>
      <img src={product.image} alt={product.title} />
      <Link to={`/products/${product.id}`}>{product.title}</Link>
      <div>${product.price}</div>
      <StyledButton>Add to cart</StyledButton>
    </StyledProductCard>
  );
};

export default ProductCard;

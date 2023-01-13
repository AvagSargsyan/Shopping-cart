import { StyledProductCard } from './styles/ProductCard.style';

const ProductCard = ({ product }) => {
  return (
    <StyledProductCard>
      <img src={product.image} alt={product.title} />
      <div>{product.title}</div>
      <span>${product.price}</span>
      <button>Add to cart</button>
    </StyledProductCard>
  );
};

export default ProductCard;

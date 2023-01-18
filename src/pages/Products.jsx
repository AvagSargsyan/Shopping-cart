import { StyledProducts } from './styles/Products.style';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

const Products = ({ incrementCount, products, loading, error }) => {
  if (error) {
    console.log(error);
  }

  return (
    <StyledProducts>
      {loading && <Loader />}
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            incrementCount={incrementCount}
            product={product}
          />
        ))}
      {error && <div>Something went wrong! Please reload the page.</div>}
    </StyledProducts>
  );
};

export default Products;

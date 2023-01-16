import { StyledProducts } from './styles/Products.style';
import ProductCard from '../components/ProductCard';
import filterProducts from '../utilities/filterProducts';
import Loader from '../components/Loader';

const Products = ({ products, error, loading }) => {
  if (error) {
    console.log(error);
  }

  return (
    <StyledProducts>
      {loading && <Loader />}
      {products &&
        filterProducts(products).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      {error && <div>Something went wrong! Please reload the page.</div>}
    </StyledProducts>
  );
};

export default Products;

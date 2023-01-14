import { StyledProducts } from './styles/Products.style';
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';
import filterProducts from '../utilities/filterProducts';

const Products = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://fakestoreapi.com/products');

  if (error) {
    console.log(error);
  }

  return (
    <StyledProducts>
      {loading && <div>Loading...</div>}
      {products &&
        filterProducts(products).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </StyledProducts>
  );
};

export default Products;

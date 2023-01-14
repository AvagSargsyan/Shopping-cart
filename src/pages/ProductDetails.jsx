import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {
  StyledProduct,
  StyledProductDetails,
} from './styles/ProductDetails.style';
import { FaShoppingCart } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (error) {
    console.log(error);
  }

  let navigate = useNavigate();

  return (
    <StyledProductDetails>
      {loading && <div>Loading...</div>}
      {product && (
        <StyledProductDetails>
          <button onClick={() => navigate('/products')}>Go back</button>
          <StyledProduct>
            <img src={product.image} alt={product.title} />
            <span>{product.category}</span>
            <div>{product.title}</div>
            <div>{product.description}</div>
            <div>${product.price}</div>
            <div>
              <button>-</button>0<button>+</button>
              <button>
                <FaShoppingCart />
                Add to cart
              </button>
            </div>
          </StyledProduct>
        </StyledProductDetails>
      )}
    </StyledProductDetails>
  );
};

export default ProductDetails;

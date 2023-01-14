import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {
  StyledAddSection,
  StyledCategory,
  StyledPrice,
  StyledOldPrice,
  StyledProduct,
  StyledProductDetails,
  StyledPriceSection,
  StyledInfo,
  StyledAddButton,
  StyledCountButton,
} from './styles/ProductDetails.style';
import { FaShoppingCart, FaPlus, FaMinus } from 'react-icons/fa';
import { StyledButton } from '../components/styles/ProductCard.style';
import Loader from '../components/Loader';

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
      {loading && <Loader />}
      {product && (
        <StyledProductDetails>
          <StyledButton onClick={() => navigate('/products')}>
            Go back
          </StyledButton>
          <StyledProduct>
            <img src={product.image} alt={product.title} />
            <StyledInfo>
              <StyledCategory>{product.category}</StyledCategory>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <StyledPriceSection>
                <StyledPrice>${product.price}</StyledPrice>
                <StyledOldPrice>
                  ${Math.floor(product.price) + 10 + '.99'}
                </StyledOldPrice>
              </StyledPriceSection>
              <StyledAddSection>
                <StyledCountButton>
                  <FaMinus />
                </StyledCountButton>
                <span>0</span>
                <StyledCountButton>
                  <FaPlus />
                </StyledCountButton>
                <StyledAddButton>
                  <FaShoppingCart />
                  Add to cart
                </StyledAddButton>
              </StyledAddSection>
            </StyledInfo>
          </StyledProduct>
        </StyledProductDetails>
      )}
    </StyledProductDetails>
  );
};

export default ProductDetails;

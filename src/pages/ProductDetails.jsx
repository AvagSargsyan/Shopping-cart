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
import { useState } from 'react';

const ProductDetails = ({ addCount }) => {
  const { id } = useParams();
  let navigate = useNavigate();

  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  const [localItemCount, setLocatItemCount] = useState(0);

  if (error) {
    console.log(error);
  }

  const incrementLocalCount = () => {
    setLocatItemCount((prevCount) => prevCount + 1);
  };

  const decrementLocalCount = () => {
    setLocatItemCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <StyledProductDetails>
      {loading && <Loader />}
      {product && (
        <StyledProductDetails>
          <StyledButton onClick={() => navigate('/shopping-cart/products')}>
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
                  ${(product.price + 10).toFixed(2)}
                </StyledOldPrice>
              </StyledPriceSection>
              <StyledAddSection>
                <StyledCountButton onClick={decrementLocalCount}>
                  <FaMinus />
                </StyledCountButton>
                <span>{localItemCount}</span>
                <StyledCountButton onClick={incrementLocalCount}>
                  <FaPlus />
                </StyledCountButton>
                <StyledAddButton
                  onClick={() => {
                    if (localItemCount > 0) {
                      addCount(product.id, localItemCount);
                      setLocatItemCount(0);
                    }
                  }}
                >
                  <FaShoppingCart />
                  Add to cart
                </StyledAddButton>
              </StyledAddSection>
            </StyledInfo>
          </StyledProduct>
        </StyledProductDetails>
      )}
      {error && (
        <div>
          Something went wrong! Please check your internet connection and reload
          the page.
        </div>
      )}
    </StyledProductDetails>
  );
};

export default ProductDetails;

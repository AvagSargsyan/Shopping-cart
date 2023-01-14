import styled from "styled-components";

const StyledProductDetails = styled.div`
  background: ${({ theme }) => theme.colors.darkerLight};
  color: ${({ theme }) => theme.colors.dark};
  padding: 0.8rem;
  
  button {
    animation: grow 0.6s;
  }
`

const StyledProduct = styled.div`
  margin-top: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-evenly;
  animation: fade-left 0.6s;

  img {
    width: 30vw;
    min-width: 300px;
    max-width: 450px;
    height: auto;
    border-radius: 8px;
    animation: fade-right 0.6s;
  }

  h2 {
    font-size: 2.3rem;
  }

  p {
    color: ${({ theme }) => theme.colors.lighterDark};
    margin-top: 1.5rem;
    line-height: 1.4rem;
  }
`

const StyledInfo = styled.div`
  width: 50vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const StyledCategory = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`

const StyledPriceSection = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const StyledPrice = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
`

const StyledOldPrice = styled.div`
  color: ${({ theme }) => theme.colors.lighterDark};
  text-decoration: line-through;
  font-size: 1.2rem;
`

const StyledAddSection = styled.div`
  margin-top: 8vh;
  display: flex;
  align-items: center;
  gap: 2rem;
  
  span {
    font-size: 1.8rem;
    font-weight: 600;
  }
`

const StyledAddButton = styled.button`
  margin-left: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.light};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.1s ease-in-out;
  cursor: pointer;

  svg {
    min-width: 1.2rem;
  }

  &:hover {
    opacity: 0.9;
  }
`

const StyledCountButton = styled.button`
  padding: 0.6rem;
  border: none;
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.light};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

`

export {
  StyledProductDetails,
  StyledProduct,
  StyledInfo,
  StyledCategory,
  StyledPrice,
  StyledOldPrice,
  StyledPriceSection,
  StyledAddSection,
  StyledCountButton,
  StyledAddButton
}

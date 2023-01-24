import styled from 'styled-components';

const StyledProductCard = styled.div`
  font-size: 1.1rem;
  background: #fff;
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transform: scale(1.05);
  transition: 0.15s ease-in-out;
  gap: 0.8rem;
  animation: grow 0.6s;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    width: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }

  img {
    align-self: center;
    width: 95%;
    max-width: 230px;
    min-width: 150px;

    @media screen and (max-width: 768px) {
      max-width: 200px;
    }
  }

  a {
    font-weight: 700;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};

    &:hover {
      color: ${({ theme }) => theme.colors.lighterDark};
    }
  }

  span {
  }

`

const StyledButton = styled.button`
  align-self: stretch;
  border: none;
  border-radius: 8px;
  padding: 0.8rem;
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.lighterDark};
  }
`

export {
  StyledProductCard,
  StyledButton
}

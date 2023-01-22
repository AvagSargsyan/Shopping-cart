import styled from 'styled-components';

const StyledCartButton = styled.button`
  position: relative;
  color: ${({ theme }) => theme.colors.dark};
  background: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 1rem 1.1rem;
  border-radius: 50%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  animation: grow 0.8s;

  @media screen and (max-width: 768px) {
    padding: 0.7rem 0.8rem;
  }

  div {
    position: absolute;
    bottom: -0.4rem;
    left: -0.4rem;

    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    padding: 0 0.4rem 0.1rem 0.4rem;
    min-width: 1.8rem;
    max-width: 2.2rem;
    animation: grow 0.2s;
    
    span {
      font-size: 0.9rem;
      font-weight: 600;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.darkerLight};
  }
`

export {
  StyledCartButton
}

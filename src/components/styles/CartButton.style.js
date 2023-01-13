import styled from 'styled-components';

const StyledCartButton = styled.button`
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

  &:hover {
    background: ${({ theme }) => theme.colors.darkerLight};
  }
`

export {
  StyledCartButton
}

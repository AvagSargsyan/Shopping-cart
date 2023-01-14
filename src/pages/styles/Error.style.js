import styled from 'styled-components';

export const StyledError = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-align: center;
  h1 {
    margin: 20vh 0 1rem 0;
    text-transform: uppercase;
  }
`

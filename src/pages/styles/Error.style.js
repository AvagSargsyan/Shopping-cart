import styled from 'styled-components';

export const StyledError = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-transform: uppercase;
  }
`
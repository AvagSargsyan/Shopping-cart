import styled from 'styled-components';

const StyledProducts = styled.div`
  padding: 5vw 20vw;
  background: ${({ theme }) => theme.colors.darkerLight};
  color: ${({ theme }) => theme.colors.dark};
  min-width: 320px;
  align-self: center;
  display: grid;
  gap: 5rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

  @media screen and (max-width: 948px) {
    padding: 10vh 7vw;
    gap: 4rem;
  }
`

export {
  StyledProducts
}

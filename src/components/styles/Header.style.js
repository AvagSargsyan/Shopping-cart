import styled from 'styled-components';

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.6rem 0;
  max-height: 10%;

  h1 {
    a {
      font-size: 2.5rem;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-height: 15%;
  }
`

const StyledNavbar = styled.nav`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.light};
    font-size: 1.3rem;

    &:hover {
      color: ${({ theme }) => theme.colors.darkerLight};
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    justify-content: space-around;
    
    a {
      font-size: 1.1rem;
    }
  }
`

const StyledCover = styled.div`
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.colors.dark};
  opacity: 0.6;
  height: 100vh;
  width: 100%;
  animation: fade 0.4s ease-in-out;
`

export {
  StyledHeader,
  StyledNavbar,
  StyledCover
}

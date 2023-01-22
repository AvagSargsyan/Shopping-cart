import styled from 'styled-components';

const StyledCartItem = styled.div`
  font-size: 1.1rem;
  background: #fff;
  color: ${({ theme }) => theme.colors.dark} !important;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  gap: 0.8rem;
  animation: grow 0.6s;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    button {
      font-size: 1rem;
      padding: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.9rem;
      
      span {
        width: 3.2vw;
        text-align: center;
        font-weight: 600;
        font-size: 1.4rem;

        @media screen and (max-width: 768px) {
          width: 6vw;
        }
      }
    }
  }

  img {
    flex: 3;
    align-self: center;
    width: 95%;
    max-width: 100px;
    min-width: 80px;
  }

  a {
    font-weight: 700;
    font-size: 1.2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark} !important; 

    &:hover {
      color: ${({ theme }) => theme.colors.lighterDark};
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
      font-weight: 600;
    }
  }

  button {
    align-self: flex-start;
    border: none;
    background: transparent;
    font-size: 1.3rem;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.lighterDark};
    }
  }
`

export {
  StyledCartItem
}

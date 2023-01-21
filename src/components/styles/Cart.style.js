import styled from "styled-components";

const StyledCart = styled.div`
  width: 38%;
  height: 100vh;
  padding: 1rem;
  background: #fff;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  gap: 1rem;
  animation: cover 0.4s;
  
  h2 {
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
  }
`

const StyledItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.7rem 0.5rem;
  overflow: auto;
  width: 100%;
  flex: 1;
`

const StyledCloseButton = styled.div`
  align-self: flex-end;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    color: ${({ theme }) => theme.colors.lighterDark};
  }
`

export { StyledCart, StyledCloseButton, StyledItemsSection };

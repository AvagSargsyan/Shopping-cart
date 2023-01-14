import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.3rem 0.5rem;

  svg {
    color: ${({ theme }) => theme.colors.light};
    font-size: 1.5rem;
  }
`

export { StyledFooter };

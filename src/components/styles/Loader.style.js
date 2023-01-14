import styled from 'styled-components';

export const StyledLoader = styled.div`
  color: ${({ theme }) => theme.colors.lighterDark};
  position: absolute;
  top: 40vh;
  right: 50%;
  transform: translateX(50%);
  .loader {
  border: 6px solid ${({ theme }) => theme.colors.light};
  border-radius: 50%;
  border-top: 6px solid ${({ theme }) => theme.colors.lighterDark};
  width: 55px;
  height: 55px;
  -webkit-animation: spin 1.3s linear infinite; /* Safari */
  animation: spin 1.3s linear infinite;
  margin-bottom: 0.8rem;
  margin-left: 5px;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
`

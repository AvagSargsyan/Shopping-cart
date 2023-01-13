import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    color: ${({ theme }) => theme.colors.font};
    background: ${({ theme }) => theme.colors.light};
    font-family: 'Montserrat', sans-serif;
    height: 100vh;

    #root {
      height: 100%;
    }
  }
`

export default GlobalStyles;

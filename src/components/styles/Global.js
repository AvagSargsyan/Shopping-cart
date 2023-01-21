import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    min-width: 320px;
    color: ${({ theme }) => theme.colors.font};
    background: ${({ theme }) => theme.colors.light};
    font-family: 'Montserrat', sans-serif;
    
    #root {
      height: 100vh;
    }
  }

  /* Animations */
  @keyframes grow {
    from {
      opacity: 0;
      transform: scale(0.8);
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fade-right {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fade-left {
    from {
      transform: translateX(10px);
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 0.6;
    }
  }

  @keyframes cover {
    from {
      transform: translate(100%);
      opacity: 0.5;
    }

    to {
      opacity: 1;
    }
  }
`

export default GlobalStyles;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: Libre Franklin, sans-serif;
    margin: 0;
    min-height: 100vh;
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (orientation: portrait) {
      font-size: .7em;
    }
  }
  
  html {
    font-size: 20px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: ${({ theme }) => theme.fonts.family.roboto};
  }

  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyle;

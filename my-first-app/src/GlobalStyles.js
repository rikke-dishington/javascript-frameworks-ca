// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset some default browser styles */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Set up the body style */
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, p {
    margin: 0;
    padding: 0;
  }

  /* Link Styles */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Button styles */
  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;

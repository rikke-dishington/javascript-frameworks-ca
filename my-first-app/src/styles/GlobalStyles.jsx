import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    --color-white: #ffffff;
    --color-light-grey: #888;
    --color-light-blue: #e6f3ff;
    --color-light-red: #ffebee;
    --color-dark-grey: #000000;
    --color-dark-blue: #0056b3;
    --color-dark-red: #d32f2f;
    --color-darker-blue: #cce5ff;
    --color-darker-red: #ffcccb;

    --font-primary: 'Roboto', sans-serif;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-primary);
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-dark-grey);
  }
    h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1rem;
  }
  a {
    color: var(--color-dark-blue);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyles;

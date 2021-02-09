import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: var(--color-background);
  }

  :root {
    font-size: 60%;

    --color-background: #fafafa;
    --color-primary-light: #fff;
    --color-border: #dbdbdb; 
    --color-dark: #262626; 
    --color-text-light: #8e8e8e;
    --color-text-blue: #0095f6;
  }
`;

import {css} from 'styled-components';

const general = css`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    min-width: 300px;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }

  body {
    color: #323c46;
    background-color: #f9f9fb;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    margin: 0 auto;
    overflow-x: hidden;
  }
  @media (max-width: 550px) {
    body {
      text-align: center;
    }
  }

  body,
  button,
  input,
  select,
  textarea {
    font-size: 16px;
    font-family: 'Hind', sans-serif;
  }

  hr {
    margin: 1.5rem auto;
    border: 0;
    height: 1px;
  }

  a {
    color: #323c46;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
  a strong {
    color: currentColor;
  }
  strong {
    font-weight: 700;
  }

  img {
    display: block;
    height: auto;
    width: 100%;
  }
`;

export {general};

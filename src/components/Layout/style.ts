import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }
  a { text-decoration: none; }

  html,
  body {
    height: 100%;
    font-family: "Hind", sans-serif;
    font-size: 16px;
  }
  button:focus {
    outline: 0;
  }
`;

export {GlobalStyles};

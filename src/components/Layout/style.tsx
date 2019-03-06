import {createGlobalStyle} from 'styled-components';

import styled from 'utils/theme';

import {transitionTimeout} from './';

const PageTransitionView = styled.div`
  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${transitionTimeout}ms, transform ${transitionTimeout}ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${transitionTimeout}ms;
  }
  .loading-indicator-appear,
  .loading-indicator-enter {
    opacity: 0;
  }
  .loading-indicator-appear-active,
  .loading-indicator-enter-active {
    opacity: 1;
    transition: opacity ${transitionTimeout}ms;
  }
`;

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

export {PageTransitionView, GlobalStyles};

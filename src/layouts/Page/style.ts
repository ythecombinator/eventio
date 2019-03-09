import {animations, column, common, content, general, helpers} from 'styles';

import {createGlobalStyle, css} from 'styled-components';

import styled from 'utils/theme';

const GlobalStyles = createGlobalStyle`
  ${animations}
  ${column}
  ${common}
  ${content}
  ${general}
  ${helpers}
`;

const headerGap = css`
  padding-top: 120px;
`;

const fullScreen = css`
  display: flex;
  min-height: 100vh;
`;

interface MainViewProps {
  headerGap: boolean;
  fullScreen: boolean;
}

const MainView = styled.main<MainViewProps>`
  ${(props) => props.headerGap && headerGap};
  ${(props) => props.fullScreen && fullScreen};

  min-height: 100%;

  li + li {
    margin-top: 0.25em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    font-weight: 400;
    line-height: 1.125;
  }

  h1 {
    font-size: 4em;
    margin-bottom: 0.5em;
  }

  h1:not(:first-child) {
    margin-top: 1em;
  }

  h2 {
    font-size: 3em;
    margin-bottom: 0.5714em;
  }

  h3 {
    font-size: 2.5em;
    margin-bottom: 0.6666em;
  }

  h3:not(:first-child) {
    margin-top: 1.3333em;
  }

  h4 {
    font-size: 28px;
    margin-bottom: 0.2em;
  }

  h5 {
    font-size: 22px;
    margin-bottom: 0.28em;
  }

  h6 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  @media (max-width: 400px) {
    padding-top: 90px !important;
    min-height: auto !important;
  }

  @media (max-width: 550px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

export {GlobalStyles, MainView};

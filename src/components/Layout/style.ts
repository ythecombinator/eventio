import {general, reset} from 'styles';

import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${general}
`;

export {GlobalStyles};

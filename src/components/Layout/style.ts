import {animations, column, common, content, general, helpers, reset} from 'styles';

import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${animations}
  ${column}
  ${common}
  ${content}
  ${general}
  ${helpers}
`;

export {GlobalStyles};

import {flexRow} from 'styles/mixins';

import styled from 'utils/theme';

const SwitcherView = styled.div`
  ${flexRow}
  opacity: 0.8;
  svg {
    cursor: pointer;
  }
`;

export {SwitcherView};

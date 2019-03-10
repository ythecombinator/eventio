import {flexRow} from 'styles/helpers';

import styled from 'utils/theme';

const WrapperView = styled.a`
  ${flexRow}
  width: 50%;
  > * {
    width: 50%;
  }
  @media (max-width: 1050px) {
    width: 100%;
    > * {
      width: 100%;
    }
  }
`;

const TitleView = styled.h6``;

const DescriptionView = styled.p`
  color: #949ea8;
  font-size: 16px;
`;

export {WrapperView, TitleView, DescriptionView};

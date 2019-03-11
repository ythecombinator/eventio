import {flexRow} from 'styles/mixins';

import styled from 'utils/theme';

const OwnerView = styled.p`
  color: ${(props) => props.theme.colors.gray14};
  font-size: 14px;
`;

const DateView = styled.span`
  color: ${(props) => props.theme.colors.gray13};
  font-size: 14px;
  @media (max-width: 1050px) {
    width: 100%;
  }
`;

const AttendeesView = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray13};
`;

const InfoView = styled.div`
  ${flexRow}
  flex: 1;
`;

export {OwnerView, DateView, AttendeesView, InfoView};

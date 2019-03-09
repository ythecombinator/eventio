import {flexRow} from 'styles/helpers';

import styled from 'utils/theme';

const OwnerView = styled.p`
  color: #7d7878;
  font-size: 14px;
`;

const DateView = styled.span`
  color: #cacdd0;
  font-size: 14px;
  @media (max-width: 1050px) {
    width: 100%;
  }
`;

const AttendeesView = styled.span`
  font-size: 14px;
  color: #cacdd0;
`;

const InfoView = styled.div`
  ${flexRow}
  flex: 1;
`;

export {OwnerView, DateView, AttendeesView, InfoView};

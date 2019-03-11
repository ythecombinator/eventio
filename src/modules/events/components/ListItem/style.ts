import {flexRow} from 'styles/mixins';

import styled from 'utils/theme';

const ListItemView = styled.div`
  ${flexRow}
  position: relative;
  background: white;
  padding: 25px 32px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.11);
  color: ${(props) => props.theme.colors.grayishBlue2};
  text-align: left;

  h6 {
    margin-bottom: 0;
  }

  @media (max-width: 1050px) {
    padding: 20px;
    h6 {
      font-size: 20px;
      margin-bottom: 5px;
    }
  }
`;

const EventView = styled.div`
  ${flexRow}
  width: 100%;
`;

const InfoView = styled.div`
  ${flexRow}
  width: 50%;

  .Button {
    margin-left: 60px;
  }
  @media (max-width: 1050px) {
    margin-top: 15px;
    width: 100%;
  }
`;

export {ListItemView, EventView, InfoView};

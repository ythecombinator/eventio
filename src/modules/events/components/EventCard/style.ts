import {css} from 'styled-components';
import {flexRow} from 'styles/helpers';

import styled from 'utils/theme';

interface EventCardViewProps {
  size: 'big' | 'default';
}

const EventCardViewBig = css`
  height: auto;
  .h5 {
    font-size: 45px;
  }
`;

const EventCardView = styled.div<EventCardViewProps>`
  background-color: white;
  padding: 32px;
  height: 320px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.11);
  color: #949ea8;
  text-align: left;
  transition: box-shadow 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${(props) => props.size === 'big' && EventCardViewBig};

  h5 {
    color: #323c46;
  }

  :hover {
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.05), 0 5px 20px rgba(0, 0, 0, 0.05);
  }

  .EventCard.big .EventCard-description {
    max-width: 80%;
  }
`;

const EventCardDateView = styled.p`
  font-size: 14px;
  color: #cacdd0;
`;

const EventCardLinkView = styled.a`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 15px;
`;

const EventCardAboutView = styled.div`
  margin-top: 15px;
  p {
    font-size: 14px;
    color: #7d7878;
  }
`;

const EventCardDescriptionView = styled.p`
  max-width: 223px;
  margin-top: 15px;
  color: #949ea8;
`;

const EventCardFooterView = styled.div`
  ${flexRow}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EventCardAtendeesView = styled.div`
  ${flexRow}
  span {
    padding: 3px 0 0 8px;
    color: $colors-grey-regent;
    font-size: 14px;
  }
`;

export {
  EventCardView,
  EventCardAboutView,
  EventCardAtendeesView,
  EventCardDateView,
  EventCardDescriptionView,
  EventCardFooterView,
  EventCardLinkView,
};

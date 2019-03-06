import styled from 'styled-components';

import {styles} from 'utils/styles';
import {colors} from 'utils/theme';

const {veryDarkBlue} = colors;

const {queries} = styles;

const TrooperImageView = styled.svg`
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  fill: ${veryDarkBlue};
  opacity: 0.06;
  z-index: -1;
  transition: all 0.5s ease-out;

  @media (min-width: ${queries.tablet}) {
    width: 300px;
  }

  @media (min-width: ${queries.laptop}) {
    top: 296px;
    left: 341px;
    transform: translateX(0);
    width: 445px;
  }
`;

export default TrooperImageView;

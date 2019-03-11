import {styles} from 'utils/styles';
import styled from 'utils/theme';
import {colors} from 'utils/theme';

const {grayishBlue2, white} = colors;

const LogoView = styled.svg`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 30px;
  height: 30px;
  fill: ${grayishBlue2};
  z-index: 200;

  @media (min-width: ${styles.queries.laptop}) {
    top: 39px;
    left: 61px;
    fill: ${(props) => (props.color === 'light' ? white : grayishBlue2)};
  }
`;

export default LogoView;

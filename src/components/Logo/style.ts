import {styles} from 'utils/styles';
import styled from 'utils/theme';
import {colors} from 'utils/theme';

const {darkGrayishBlue, white} = colors;

const LogoView = styled.svg`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 30px;
  height: 30px;
  fill: ${darkGrayishBlue};

  @media (min-width: ${styles.queries.laptop}) {
    top: 39px;
    left: 61px;
    fill: ${(props) => (props.color === 'light' ? white : darkGrayishBlue)};
  }
`;

export default LogoView;

import {IconProps, Loading} from 'components/Icons';

import {styles} from 'utils/styles';
import styled from 'utils/theme';

const {rotate} = styles.animation;

const SpinnerView = styled(Loading)<IconProps>`
  animation: ${rotate} 2s linear infinite;
`;

export default SpinnerView;

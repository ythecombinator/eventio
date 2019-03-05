import React, {FunctionComponent} from 'react';
import {IconProps, Loading} from 'components/Icons';

import {styles as stylesUtils} from 'utils/styles';
import styled from 'utils/theme';

const {rotate} = stylesUtils.animation;

// Interfaces

interface SpinnerProps {
  size: number;
  color: string;
}

// Components

const SvgView = styled(Loading)<IconProps>`
  animation: ${rotate} 2s linear infinite;
`;

const Spinner: FunctionComponent<SpinnerProps> = (props) => {
  const {size, color} = props;

  return <SvgView width={size} height={size} color={color} />;
};

export default Spinner;

import React, {FunctionComponent} from 'react';
import SpinnerView from './style';

interface SpinnerProps {
  size: number;
  color: string;
}

const Spinner: FunctionComponent<SpinnerProps> = (props) => {
  const {size, color} = props;

  return <SpinnerView width={size} height={size} color={color} />;
};

export default Spinner;

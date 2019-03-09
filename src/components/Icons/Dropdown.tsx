import React, {FunctionComponent} from 'react';
import {IconProps} from './';

const Dropdown: FunctionComponent<IconProps> = (props) => {
  const {width, height, color} = props;

  return (
    <svg width={width} height={height} viewBox="0 0 10 5" {...props}>
      <path d="M0 0l5 5 5-5z" fill={color} />
    </svg>
  );
};

export default Dropdown;

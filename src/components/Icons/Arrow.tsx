import React, {FunctionComponent} from 'react';
import {IconProps} from './';

const Arrow: FunctionComponent<IconProps> = (props) => {
  const {width, height, color} = props;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...props}>
      <path d="M0 0l5 5 5-5z" fill={color} fillRule="evenodd" />
    </svg>
  );
};

export default Arrow;

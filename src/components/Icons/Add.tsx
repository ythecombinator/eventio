import React, {FunctionComponent} from 'react';
import {IconProps} from './';

const Add: FunctionComponent<IconProps> = (props) => {
  const {width, height, color} = props;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...props}>
      <path d="M14 8H8v6H6V8H0V6h6V0h2v6h6z" fill={color} fillRule="evenodd" />
    </svg>
  );
};

export default Add;

import React, {FunctionComponent} from 'react';
import {IconProps} from './';

const Grid: FunctionComponent<IconProps> = (props) => {
  const {width, height, color} = props;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...props}>
      <path
        fill={color}
        d="M0 6h5V0H0v6zm0 7h5V7H0v6zm6 0h5V7H6v6zm6 0h5V7h-5v6zM6 6h5V0H6v6zm6-6v6h5V0h-5z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Grid;

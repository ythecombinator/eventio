import React, {FunctionComponent} from 'react';
import {IconProps} from './';

const User: FunctionComponent<IconProps> = (props) => {
  const {width, height, color} = props;

  return (
    <svg width={width} height={height} viewBox="0 0 16 16" {...props}>
      <g fill="none" fillRule="evenodd">
        <path strokeOpacity={0.008} stroke="#000" strokeWidth={0} d="M-4-4h24v24H-4z" />
        <path
          d="M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default User;

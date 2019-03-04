import React, {FunctionComponent} from 'react';
import {IconProps} from './';

const List: FunctionComponent<IconProps> = (props) => {
  const {width, height, color} = props;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...props}>
      <path fill={color} d="M0 13h17V7H0v6zM0 0v6h17V0H0z" fillRule="evenodd" />
    </svg>
  );
};

export default List;

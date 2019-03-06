import React, {FunctionComponent} from 'react';
import {IconProps} from './';

// Components

const Loading: FunctionComponent<IconProps> = (props) => {
  const {width, height, color} = props;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} {...props}>
      <path
        fill={color}
        // tslint:disable-next-line: max-line-length
        d="M13.5 0a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0V.75A.75.75 0 0 0 13.5 0zM4.477 3.727a.733.733 0 0 0-.516.234.743.743 0 0 0 0 1.055l3.164 3.187a.77.77 0 0 0 1.078 0 .77.77 0 0 0 0-1.078L5.016 3.961a.789.789 0 0 0-.539-.234zm18.046 0a.789.789 0 0 0-.539.234l-3.187 3.164a.77.77 0 0 0 0 1.078.77.77 0 0 0 1.078 0l3.164-3.187a.743.743 0 0 0 0-1.055.733.733 0 0 0-.516-.234zM.75 12.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5H.75zm21 0a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5zM7.664 18.586a.764.764 0 0 0-.539.211l-3.164 3.187a.743.743 0 0 0 0 1.055.743.743 0 0 0 1.055 0l3.187-3.164a.77.77 0 0 0 0-1.078.762.762 0 0 0-.539-.211zm11.672 0a.762.762 0 0 0-.539.211.77.77 0 0 0 0 1.078l3.187 3.164a.743.743 0 0 0 1.055 0 .743.743 0 0 0 0-1.055l-3.164-3.187a.764.764 0 0 0-.539-.211zM13.5 21a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Loading;

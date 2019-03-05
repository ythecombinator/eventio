import React, {FunctionComponent, useState} from 'react';
import {Tooltip} from 'react-tippy';
import popoverStyles from 'react-tippy/dist/tippy.css';
import styled from 'utils/theme';

// Interfaces

type PopoverPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'bottom'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

interface PopoverProps {
  placement: PopoverPlacement;
  target: JSX.Element;
}

// Components

const PopoverWrapper = styled.div`
  ${popoverStyles}
`;

const Popover: FunctionComponent<PopoverProps> = (props) => {
  const {children, target, placement} = props;

  return (
    <PopoverWrapper>
      <Tooltip
        html={children}
        position={placement}
        trigger="click"
        theme="light"
        interactive={true}
      >
        {target}
      </Tooltip>
    </PopoverWrapper>
  );
};

export default Popover;

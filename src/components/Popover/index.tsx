import React, {FunctionComponent} from 'react';
import {Tooltip} from 'react-tippy';
// tslint:disable-next-line: no-import-side-effect
import 'react-tippy/dist/tippy.css';

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

const Popover: FunctionComponent<PopoverProps> = (props) => {
  const {children, target, placement} = props;

  return (
    <Tooltip html={children} position={placement} trigger="click" theme="light" interactive={true}>
      {target}
    </Tooltip>
  );
};

export default Popover;

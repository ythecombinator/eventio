import React, {cloneElement, FunctionComponent, ReactElement} from 'react';
import {theme} from 'utils/theme';

import ToggleButtonView from './style';

interface ToggleButtonProps {
  value: string;
  selected?: boolean;
  onClick?: () => void;
}

const ToggleButton: FunctionComponent<ToggleButtonProps> = (props) => {
  const {children, selected, onClick} = props;

  const newChildren = cloneElement(children as ReactElement, {
    color: selected ? theme.ToggleButton.selected : theme.ToggleButton.regular,
  });

  return (
    <ToggleButtonView selected={selected} onClick={onClick}>
      {newChildren}
    </ToggleButtonView>
  );
};

export default ToggleButton;

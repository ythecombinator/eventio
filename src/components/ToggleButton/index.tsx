import React, {cloneElement, FunctionComponent, ReactElement} from 'react';
import styled, {theme} from 'utils/theme';

// Interfaces

interface ToggleButtonProps {
  value: string;
  selected?: boolean;
  onClick?: () => void;
}

interface ToggleButtonViewProps {
  selected: boolean;
}

// Components

const ToggleButtonView = styled.div<ToggleButtonViewProps>`
  cursor: pointer;
  color: ${(props) =>
    props.selected
      ? props.theme.ToggleButton.selected
      : props.theme.ToggleButton.regular} !important;
  text-transform: uppercase;
  font-size: 12px;
  padding: 0.25em 0.5em;
`;

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

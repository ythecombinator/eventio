import React, {cloneElement, FunctionComponent, ReactElement} from 'react';
import styled from 'utils/theme';

// Interfaces

interface ToggleButtonGroupProps {
  value: string;
  onChange: (newValue: string) => void;
}

// Components

const ToggleButtonGroupView = styled.div`
  display: flex;
  justify-content: center;
`;

const ToggleButtonGroup: FunctionComponent<ToggleButtonGroupProps> = (props) => {
  const {children, onChange, value: selectedValue} = props;

  return (
    <ToggleButtonGroupView>
      {(children as ReactElement[]).map((child) => {
        const {value} = child.props;

        const onClick = () => onChange(value);
        const selected = value === selectedValue;
        return cloneElement(child, {
          key: value,
          onClick,
          selected,
        });
      })}
    </ToggleButtonGroupView>
  );
};

export default ToggleButtonGroup;

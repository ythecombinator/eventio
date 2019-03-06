import React, {cloneElement, FunctionComponent, ReactElement} from 'react';
import ToggleButtonGroupView from './style';

interface ToggleButtonGroupProps {
  value: string;
  onChange: (newValue: string) => void;
}

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

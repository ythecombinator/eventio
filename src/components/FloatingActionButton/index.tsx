import React, {FunctionComponent, InputHTMLAttributes} from 'react';
import {FloatingActionButtonIconView, FloatingActionButtonView} from './style';

interface FloatingActionButtonProps extends InputHTMLAttributes<HTMLButtonElement> {}

const FloatingActionButton: FunctionComponent<FloatingActionButtonProps> = (props) => {
  const {children, onClick, disabled, color} = props;

  return (
    <FloatingActionButtonView onClick={onClick} disabled={disabled} color={color}>
      <FloatingActionButtonIconView>{children}</FloatingActionButtonIconView>
    </FloatingActionButtonView>
  );
};

export default FloatingActionButton;

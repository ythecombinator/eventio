import React, {FunctionComponent, InputHTMLAttributes} from 'react';
import styled from 'utils/theme';

// Interfaces

interface FloatingActionButtonProps extends InputHTMLAttributes<HTMLButtonElement> {}

// Components

const FloatingActionButtonView = styled.button`
  display: flex;
  justify-content: center;
  width: 55px;
  height: 55px;
  border: 0;
  border-radius: 50%;
  background: ${(props) => props.color};
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  box-shadow: 0px 2px 5px #666;
`;

const FloatingActionButtonIconView = styled.div`
  font-size: 20px;
`;

const FloatingActionButton: FunctionComponent<FloatingActionButtonProps> = (props) => {
  const {children, onClick, disabled, color} = props;

  return (
    <FloatingActionButtonView onClick={onClick} disabled={disabled} color={color}>
      <FloatingActionButtonIconView>{children}</FloatingActionButtonIconView>
    </FloatingActionButtonView>
  );
};

export default FloatingActionButton;

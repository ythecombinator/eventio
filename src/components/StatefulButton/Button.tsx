import React, {FunctionComponent} from 'react';
import Spinner from 'components/Spinner';

import {ButtonView} from './style';

export enum ButtonType {
  primary = 'primary',
  update = 'update',
  alert = 'alert',
  disabled = 'disabled',
  dark = 'dark',
}

export enum ButtonSize {
  small = 'small',
  big = 'big',
}

interface Props {
  children: string;
  type: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  size: ButtonSize;
  onClick: () => void;
}

const Button: FunctionComponent<Props> = (props) => {
  const {children, type, size, disabled, onClick, loading} = props;

  const LoadingIndicator = <Spinner size={27} color="white" />;

  return (
    <ButtonView onClick={onClick} type={type} size={size} disabled={disabled}>
      {loading ? LoadingIndicator : children}
    </ButtonView>
  );
};

Button.defaultProps = {
  type: ButtonType.primary,
  disabled: false,
  loading: false,
  size: ButtonSize.big,
  onClick: () => null,
};

export default Button;

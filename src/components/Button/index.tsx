import React, {FunctionComponent, InputHTMLAttributes} from 'react';
import Spinner from 'components/Spinner';

import {theme} from 'utils/theme';

import ButtonView from './style';

export enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  quaternary = 'quaternary',
}

export enum ButtonSize {
  large = 'large',
  small = 'small',
}

const colorMapping = {
  [ButtonColor.primary]: {
    regular: theme.Button.primary.regular,
    hover: theme.Button.primary.hover,
  },
  [ButtonColor.secondary]: {
    regular: theme.Button.secondary.regular,
    hover: theme.Button.secondary.hover,
  },
  [ButtonColor.tertiary]: {
    regular: theme.Button.tertiary.regular,
    hover: theme.Button.tertiary.hover,
  },
  [ButtonColor.quaternary]: {
    regular: theme.Button.quaternary.regular,
    hover: theme.Button.quaternary.hover,
  },
};

const sizeMapping = {
  [ButtonSize.large]: {
    width: 240,
    height: 57,
    font: 16,
  },
  [ButtonSize.small]: {
    width: 100,
    height: 32,
    font: 14,
  },
};

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  dimensions: ButtonSize;
  color: ButtonColor;
  loading?: boolean;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const {children, onClick, disabled, dimensions, color, loading} = props;

  const LoadingIndicator = <Spinner size={27} color="white" />;

  return (
    <ButtonView
      onClick={onClick}
      disabled={disabled}
      size={sizeMapping[dimensions]}
      colorPalette={colorMapping[color]}
    >
      {loading ? LoadingIndicator : children}
    </ButtonView>
  );
};

export default Button;

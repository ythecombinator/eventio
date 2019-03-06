import React, {FunctionComponent, InputHTMLAttributes} from 'react';
import Spinner from 'components/Spinner';

import styled, {theme} from 'utils/theme';

// Utils

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

// Interfaces

interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  dimensions: ButtonSize;
  color: ButtonColor;
  loading?: boolean;
}

interface ButtonViewProps {
  size: {
    width: number;
    height: number;
    font: number;
  };
  colorPalette: {
    regular: string;
    hover: string;
  };
}

// Components

const ButtonView = styled.button<ButtonViewProps>`
  color: white;
  min-height: ${(props) => `${props.size.height}px`};
  min-width: ${(props) => `${props.size.width}px`};
  display: flex;
  justify-content: center;
  background: ${(props) => props.colorPalette.regular};
  text-transform: uppercase;
  font-size: ${(props) => `${props.size.font}px`};
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background: ${(props) => props.colorPalette.hover};
  }
`;

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

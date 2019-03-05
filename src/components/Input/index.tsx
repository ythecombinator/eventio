import React, {FunctionComponent, InputHTMLAttributes, useState} from 'react';
import {styles as stylesUtils} from 'utils/styles';
import styled from 'utils/theme';

const {scale} = stylesUtils.animation;

// Interfaces

interface UnderlineViewProps {
  show: boolean;
}

interface LabelViewProps {
  focused: boolean;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

// Components

const InputContainerView = styled.div`
  margin: auto;
  padding: 0;
  position: relative;
  max-width: 320px;
`;

const LabelView = styled.label<LabelViewProps>`
  font-size: 14px;
  position: relative;
  transition: color 0.5s;
  color: ${(props) =>
    props.focused ? props.theme.Input.label.focused : props.theme.Input.label.regular};
  transform: ${(props) => (props.focused ? 'scaleX(1)' : 'scaleX(0)')};
`;

const InputView = styled.input`
  position: relative;
  margin: 0;
  padding-bottom: 4px;
  padding-top: 4px;
  outline: none;
  width: 100%;
  border: none;
  font-size: 18px;
  color: ${(props) => props.theme.Input.input.regular};
  ::placeholder {
    font-size: 18px;
    color: ${(props) => props.theme.Input.input.placeholder};
  }
`;

const UnderlineView = styled.hr`
  position: absolute;
  width: 100%;
  margin: 0;
  transition: all 0.5s ease-in-out;
  border: 1px solid;
  transform: scaleX(0);
`;

const UnderlineStaticView = styled(UnderlineView)<UnderlineViewProps>`
  border: ${(props) => props.show && `1px ${props.theme.Input.underline.static}`};
  border-color: ${(props) => props.theme.Input.underline.static};
  animation: ${scale} 1s;
  transform: scaleX(1);
`;

const UnderlineFocusView = styled(UnderlineView)<UnderlineViewProps>`
  transform: ${(props) => props.show && 'scaleX(1)'};
  border-color: ${(props) => props.theme.Input.underline.focus};
`;

const UnderlineErrorView = styled(UnderlineView)<UnderlineViewProps>`
  transform: ${(props) => props.show && 'scaleX(1)'};
  border-color: ${(props) => props.theme.Input.underline.error};
`;

const ErrorView = styled.div`
  padding-top: 6px;
  color: ${(props) => props.theme.Input.error};
`;

const Input: FunctionComponent<InputProps> = (props) => {
  const {id, label, value, onChange, disabled, error, ...otherProps} = props;

  const [focused, setFocus] = useState(false);

  const shouldShowLabel = label && (focused || value);
  const shouldShowError = !!error;

  return (
    <InputContainerView>
      {label && (
        <LabelView htmlFor={id} focused={focused}>
          {label}
        </LabelView>
      )}
      <InputView
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onBlur={() => {
          setFocus(false);
        }}
        onFocus={() => {
          setFocus(true);
        }}
        {...otherProps}
      />
      <UnderlineStaticView show={disabled} />
      <UnderlineFocusView show={focused} />
      <UnderlineErrorView show={shouldShowError} />
      {shouldShowError && <ErrorView>{error}</ErrorView>}
    </InputContainerView>
  );
};

export default Input;

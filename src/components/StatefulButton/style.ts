import styled, {css} from 'utils/theme';

const ButtonSizes = {
  big: css`
    min-width: 230px;
  `,
  small: css`
    height: 32px;
    line-height: 36px;
    min-width: 100px;
    letter-spacing: 1px;
  `,
};

const ButtonTypes = {
  primary: css`
    color: white;
    background-color: #22d486;
    :hover {
      background-color: #20c77e;
    }
  `,
  update: css`
    color: #a9aeb4;
    background-color: #d9dce1;
    :hover {
      background-color: #d0d4da;
    }
  `,
  alert: css`
    color: white;
    background-color: #ff4081;
    :hover {
      background-color: #ff3177;
    }
  `,
  disabled: css`
    opacity: 0.5;
    cursor: auto;
    color: #a9aeb4;
    background-color: #d9dce1;
  `,
  dark: css`
    color: white;
    background-color: #323c46;
    :hover {
      background-color: #2c343d;
    }
  `,
};

type ButtonSize = keyof typeof ButtonSizes;
type ButtonType = keyof typeof ButtonTypes;

interface ButtonViewProps {
  size: ButtonSize;
  type: ButtonType;
}

const ButtonView = styled.button<ButtonViewProps>`
  outline: none;
  display: inline-block;
  height: 50px;
  padding: 0 20px;
  line-height: 49px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);

  ${(props) => ButtonSizes[props.size]};
  ${(props) => ButtonTypes[props.type]};
`;

export {ButtonView};

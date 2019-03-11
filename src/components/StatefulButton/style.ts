import styled, {colors, css} from 'utils/theme';

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
    background-color: ${colors.limeGreen5};
    :hover {
      background-color: ${colors.limeGreen4};
    }
  `,
  update: css`
    color: ${colors.gray10};
    background-color: ${colors.gray6};
    :hover {
      background-color: ${colors.gray11};
    }
  `,
  alert: css`
    color: white;
    background-color: ${colors.lightPink1};
    :hover {
      background-color: ${colors.lightPink3};
    }
  `,
  disabled: css`
    opacity: 0.5;
    cursor: auto;
    color: ${colors.gray10};
    background-color: ${colors.gray6};
  `,
  dark: css`
    color: white;
    background-color: ${colors.grayishBlue2};
    :hover {
      background-color: ${colors.grayishBlue4};
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

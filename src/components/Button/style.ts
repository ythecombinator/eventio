import styled from 'utils/theme';

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

export default ButtonView;

import styled from 'utils/theme';

interface ToggleButtonViewProps {
  selected: boolean;
}

const ToggleButtonView = styled.div<ToggleButtonViewProps>`
  cursor: pointer;
  color: ${(props) =>
    props.selected
      ? props.theme.ToggleButton.selected
      : props.theme.ToggleButton.regular} !important;
  text-transform: uppercase;
  font-size: 12px;
  padding: 0.25em 0.5em;
`;

export default ToggleButtonView;

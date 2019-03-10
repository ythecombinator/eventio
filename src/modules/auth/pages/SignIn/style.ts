import {styles} from 'utils/styles';
import styled, {colors} from 'utils/theme';

const {darkGrayishBlueLighten, grayishBlue2} = colors;

const {queries} = styles;

const SignUpView = styled.div`
  display: inline-block;
  color: ${grayishBlue2};
  margin-top: 16px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.71;

  &:hover {
    text-decoration: underline;
  }

  strong {
    color: ${darkGrayishBlueLighten};
    font-weight: 500;
    text-transform: uppercase;
  }

  @media (min-width: ${queries.laptop}) {
    margin-right: -20px;
  }
`;

export {SignUpView};

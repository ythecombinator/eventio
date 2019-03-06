import {styles} from 'utils/styles';
import styled, {colors} from 'utils/theme';

const {darkGrayishBlue, darkGrayishBlueLighten, lightPink, grayishBlue2} = colors;

const {queries} = styles;

interface FormViewProps {
  error: string;
}

const FormView = styled.form<FormViewProps>`
  position: relative;
  top: 114px;
  width: calc(100% - 48px);
  margin: 0 auto;
  text-align: center;

  * {
    transition: font-size 0.5s ease-out;
  }

  h1 {
    color: ${darkGrayishBlue};
    font-size: 22px;
    line-height: 2.18;
  }

  p {
    color: ${(props) => (props.error ? lightPink : darkGrayishBlueLighten)};
    font-size: 14px;
    line-height: 1.71;
  }

  div:first-of-type {
    margin-top: 48px;
  }

  .signup-link {
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
  }

  @media (min-width: ${queries.mobileL}) {
    width: 450px;
  }

  @media (min-width: ${queries.tablet}) {
    h1 {
      font-size: 28px;
      line-height: 1.71;
    }

    p {
      font-size: 18px;
      line-height: 1.33;
    }
  }

  @media (min-width: ${queries.laptop}) {
    position: absolute;
    top: 200px;
    left: 719px;
    text-align: left;

    h1 {
      padding-bottom: 6px;
    }

    .signup-link {
      position: fixed;
      top: 40px;
      right: 39px;
      margin-top: 0;
    }

    button {
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

export default FormView;

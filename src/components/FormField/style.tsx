import {styles} from 'utils/styles';
import styled, {colors} from 'utils/theme';

const {darkGrayishBlue, lightGrayishBlue2, grayishBlue2, lightGrayishBlue3, lightPink} = colors;

const {queries} = styles;

interface FormFieldViewProps {
  value: string;
  error: string;
}

const FormField = styled.div<FormFieldViewProps>`
  position: relative;

  + div {
    margin-top: 40px;
  }

  input {
    display: block;
    width: 100%;
    padding-bottom: 7px;
    background: transparent;
    color: ${darkGrayishBlue};
    font-family: 'Hind', sans-serif;
    font-size: 18px;
    line-height: 1.33;
    border: none;
    border-bottom: 1px solid ${(props) => (props.error ? lightPink : lightGrayishBlue2)};

    + label {
      position: absolute;
      top: 0;
      left: 0;
      color: ${grayishBlue2};
      line-height: 1.5;
      transition: all 0.25s ease-out;
      z-index: -1;
    }

    &:focus {
      outline: none;
      border-bottom-color: ${darkGrayishBlue};

      + label {
        top: -24px;
        font-size: 14px;
        line-height: 1.71;
        color: ${lightGrayishBlue3};
      }
    }

    ${(props) =>
      props.value &&
      `+ label {
        top: -24px;
        font-size: 14px;
        line-height: 1.71;
        color: ${lightGrayishBlue3};
      }`}
  }

  img {
    position: absolute;
    bottom: 12px;
    right: 0;
    cursor: pointer;
  }

  @media (min-width: ${queries.tablet}) {
    input {
      + label {
        font-size: 18px;
      }

      &:focus {
        + label {
          font-size: 14px;
        }
      }

      ${(props) =>
        props.value &&
        `+ label {
          font-size: 14px;
        }`}
    }
  }
`;

export default FormField;

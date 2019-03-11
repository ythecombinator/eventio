import {styles} from 'utils/styles';
import styled, {colors} from 'utils/theme';

const {grayishBlue2, gray2, gray5, gray3, lightPink1} = colors;

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
    color: ${grayishBlue2};
    font-family: 'Hind', sans-serif;
    font-size: 18px;
    line-height: 1.33;
    border: none;
    border-bottom: 1px solid ${(props) => (props.error ? lightPink1 : gray2)};

    + label {
      position: absolute;
      top: 0;
      left: 0;
      color: ${gray5};
      line-height: 1.5;
      transition: all 0.25s ease-out;
      z-index: -1;
    }

    &:focus {
      outline: none;
      border-bottom-color: ${grayishBlue2};

      + label {
        top: -24px;
        font-size: 14px;
        line-height: 1.71;
        color: ${gray3};
      }
    }

    ${(props) =>
      props.value &&
      `+ label {
        top: -24px;
        font-size: 14px;
        line-height: 1.71;
        color: ${gray3};
      }`}
  }

  svg {
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

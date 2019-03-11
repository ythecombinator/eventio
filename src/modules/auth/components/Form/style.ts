import {styles} from 'utils/styles';
import styled, {colors, css} from 'utils/theme';

const {grayishBlue2, grayishBlue1, lightPink1} = colors;

const {queries} = styles;

const headerGap = css`
  padding-top: 120px;
`;

const noHeaderGap = css`
  padding-top: 0;
`;

interface FormViewProps {
  error: string;
  headerGap?: boolean;
}

const FormView = styled.form<FormViewProps>`
  ${headerGap}

  width: calc(100% - 48px);
  margin: 0 auto;
  text-align: center;

  * {
    transition: font-size 0.5s ease-out;
  }

  h1 {
    color: ${grayishBlue2};
    font-size: 22px;
    line-height: 2.18;
  }

  p {
    color: ${(props) => (props.error ? lightPink1 : grayishBlue1)};
    font-size: 14px;
    line-height: 1.71;
  }

  div:first-of-type {
    margin-top: 48px;
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
    ${noHeaderGap}
    position: absolute;
    top: 200px;
    left: 719px;
    text-align: left;

    h1 {
      padding-bottom: 6px;
    }

    button {
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

export default FormView;

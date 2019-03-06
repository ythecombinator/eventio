import {styles} from 'utils/styles';
import styled, {colors} from 'utils/theme';

const {darkGrayishBlue, darkGrayishBlueLighten} = colors;

const {queries} = styles;

const ErrorView = styled.div`
  position: absolute;
  width: 272px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: left 0.5s ease-out;

  h1,
  p {
    transition: font-size 0.5s ease-out;
  }

  h1 {
    font-size: 22px;
    line-height: 2.18;
    text-align: center;
    color: ${darkGrayishBlue};
  }

  p {
    font-size: 14px;
    line-height: 1.71;
    color: ${darkGrayishBlueLighten};
  }

  @media (min-width: ${queries.mobileL}) {
    width: 450px;

    h1 {
      text-align: left;
    }
  }

  @media (min-width: ${queries.tablet}) {
    width: 550px;

    h1 {
      font-size: 28px;
    }
    p {
      font-size: 18px;
    }
  }

  @media (min-width: ${queries.laptop}) {
    left: 699px;
    transform: translateY(-50%);

    p {
      font-size: 18px;
    }
    button {
      margin-left: 0;
    }
  }
`;

export default ErrorView;

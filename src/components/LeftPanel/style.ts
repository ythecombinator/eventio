import {styles} from 'utils/styles';
import styled from 'utils/theme';
import {colors} from 'utils/theme';

const {limeGreenLighten, darkGrayishBlue, darkGrayishBlueLighten, white} = colors;

const LeftPanelView = styled.div`
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 480px;
  background: url('../static/images/trooper.png'), ${darkGrayishBlue};
  background-size: cover, cover;
  text-align: center;
  z-index: -1;

  .quote-box {
    position: absolute;
    bottom: 86px;
    left: 50%;
    transform: translateX(-50%);
    width: 310px;

    .quote {
      color: ${white};
      font-family: 'Playfair Display', serif;
      font-size: 36px;
      line-height: 1.5;
    }

    span {
      display: block;
      background: ${limeGreenLighten};
      width: 12px;
      height: 2px;
      margin: 21px auto 15px auto;
    }

    .author {
      color: ${darkGrayishBlueLighten};
      font-size: 18px;
      line-height: 1.33;
    }
  }

  @media (min-width: ${styles.queries.laptop}) {
    display: block;
  }
`;

export default LeftPanelView;

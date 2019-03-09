import {container} from 'styles/helpers';

import styled from 'utils/theme';

const HeaderView = styled.header`
  padding: 39px 0;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 15px;
  color: #949ea8;
`;

const ContainerView = styled.div`
  ${container}
  max-width: 1380px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface LogoViewProps {
  light: boolean;
}

const LogoView = styled.div<LogoViewProps>`
  width: 29px;
  height: 29px;
  background-image: url('/static/images/logo-dark.svg');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  mix-blend-mode: normal;

  ${(props) =>
    props.light &&
    `
  background-image: url('/static/images/logo-light.svg');

  @media (max-width: 750px) {
    background-image: url('/static/images/logo-dark.svg');
  }
  `}
`;

export {ContainerView, HeaderView, LogoView};

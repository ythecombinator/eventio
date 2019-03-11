import {popIn} from 'styles/animations';

import styled from 'utils/theme';

interface AvatarViewProps {
  big: boolean;
}

const AvatarView = styled.div<AvatarViewProps>`
  will-change: transform, opacity;
  animation: ${popIn} 0.5s cubic-bezier(1, 0, 0, 1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.gray6};
  color: ${(props) => props.theme.colors.grayishBlue1};
  font-weight: 500;
  padding-top: 2px;

  ${(props) =>
    props.big &&
    `
  width: 120px;
  height: 120px;
  font-size: 3rem;
  `}
`;

export default AvatarView;

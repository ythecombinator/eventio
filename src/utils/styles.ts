import {keyframes} from 'styled-components';

const scale = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg)
  },
  0% {
    transform: rotate(0deg);
  },
`;

export const styles = {
  animation: {
    scale,
    rotate,
  },
};

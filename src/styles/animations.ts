import {keyframes} from 'styled-components';

const popIn = keyframes`
    from {
      opacity: 0;
      transform: scale(0.1);
      transform-origin: center;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
`;

export {popIn};

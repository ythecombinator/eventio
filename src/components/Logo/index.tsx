import React, {FunctionComponent} from 'react';
import Link from 'next/link';

import LogoView from './style';

interface LogoProps {
  color: 'light' | 'dark';
}

const Logo: FunctionComponent<LogoProps> = (props) => {
  const {color} = props;
  return (
    <Link href="/">
      <LogoView color={color}>
        <g>
          <path
            stroke="none"
            transform="matrix(0.99 0 0 0.99 0.0175781 0.817383)"
            d="M0 0L0 26.942L16.872 26.942L16.872 22.002L5.244 22.002L5.244 15.77L15.77 15.77L15.77 11.096L5.244 11.096L5.244 4.94L16.872 4.94L16.872 0L0 0ZM22.477 21.299C21.8057 21.9703 21.47 22.7873 21.47 23.75C21.47 24.7127 21.8057 25.5297 22.477 26.201C23.1483 26.8723 23.9653 27.208 24.928 27.208C25.4093 27.208 25.8653 27.1193 26.296 26.942C26.7267 26.7647 27.1003 26.5177 27.417 26.201C27.7337 25.8843 27.9807 25.517 28.158 25.099C28.3353 24.681 28.424 24.2313 28.424 23.75C28.424 23.2687 28.3353 22.819 28.158 22.401C27.9807 21.983 27.7337 21.6157 27.417 21.299C27.1003 20.9823 26.7267 20.7353 26.296 20.558C25.8653 20.3807 25.4093 20.292 24.928 20.292C23.9653 20.292 23.1483 20.6277 22.477 21.299Z"
            fillRule="evenodd"
          />
        </g>
      </LogoView>
    </Link>
  );
};

export default Logo;

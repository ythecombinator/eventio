import React, {FunctionComponent, ReactNode} from 'react';
import {User} from 'modules/auth/models';
import Link from 'next/link';

import Account from 'components/Account';

import {ContainerView, HeaderView, LogoView} from './style';

interface Props {
  auth?: boolean;
  lightLogo?: boolean;
  hideAccount?: boolean;
  rightComponent?: JSX.Element;
  centerItem?: ReactNode;
  setLogout: () => void;
  user: User;
}

const Header: FunctionComponent<Props> = ({
  lightLogo,
  centerItem,
  auth,
  user,
  setLogout,
  hideAccount,
}) => (
  <HeaderView>
    <ContainerView>
      <Link href="/">
        <a>
          <LogoView light={lightLogo} />
        </a>
      </Link>
      {centerItem}
      <div id="right-header" />
      {auth && !hideAccount && <Account user={user} setLogout={setLogout} />}
    </ContainerView>
  </HeaderView>
);

Header.defaultProps = {
  auth: false,
  lightLogo: false,
  rightComponent: null,
  hideAccount: false,
  centerItem: null,
};

export default Header;

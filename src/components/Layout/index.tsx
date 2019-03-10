import React, {FunctionComponent} from 'react';
import Header from 'components/Header';

import {loadFonts} from 'utils/fonts';
import {isEmpty} from 'utils/object';

import connect, {MappedProps} from './Connector';
import {GlobalStyles} from './style';

const Layout: FunctionComponent<MappedProps> = (props) => {
  const {children, user, logout} = props;

  loadFonts();

  return (
    <>
      <GlobalStyles />
      {children}
      <Header setLogout={logout} user={user} auth={!isEmpty(user)} />
    </>
  );
};

export default connect(Layout);

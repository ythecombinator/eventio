import React, {Fragment} from 'react';
import {loadFonts} from 'utils/fonts';

import {GlobalStyles} from './style';

const Layout = (props) => {
  const {children} = props;

  loadFonts();

  return (
    <Fragment>
      <GlobalStyles />
      {children}
    </Fragment>
  );
};

export default Layout;

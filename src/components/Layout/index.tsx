import React, {Fragment} from 'react';
import {PageTransition} from 'next-page-transitions';

import {loadFonts} from 'utils/fonts';

import {GlobalStyles, PageTransitionView} from './style';

export const transitionTimeout = 400;

const Layout = (props) => {
  const {children} = props;

  loadFonts();

  return (
    <PageTransitionView>
      <PageTransition
        timeout={transitionTimeout}
        classNames="page-transition"
        loadingDelay={0}
        loadingTimeout={{
          enter: transitionTimeout,
          exit: 0,
        }}
        loadingClassNames="loading-indicator"
      >
        <Fragment>
          <GlobalStyles />
          {children}
        </Fragment>
      </PageTransition>
    </PageTransitionView>
  );
};

export default Layout;

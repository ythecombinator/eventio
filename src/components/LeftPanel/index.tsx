import React from 'react';
import Logo from 'components/Logo';

import {AuthorView, LeftPanelView, QuoteBoxView, QuoteView} from './style';

const LeftPanel = () => {
  return (
    <LeftPanelView>
      <Logo color="light" />

      <QuoteBoxView>
        <QuoteView>“Great, kid. Don’t get cocky.”</QuoteView>
        <span />
        <AuthorView>Han Solo</AuthorView>
      </QuoteBoxView>
    </LeftPanelView>
  );
};

export default LeftPanel;

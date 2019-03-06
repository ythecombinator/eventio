import React from 'react';
import LeftPanelView from './style';

const LeftPanel = () => {
  return (
    <LeftPanelView>
      <div className="quote-box">
        <p className="quote">“Great, kid. Don’t get cocky.”</p>
        <span />
        <p className="author">Han Solo</p>
      </div>
    </LeftPanelView>
  );
};

export default LeftPanel;

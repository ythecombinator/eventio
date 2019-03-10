import React, {FunctionComponent} from 'react';
import {ViewTypes} from 'modules/events/models';

import {Grid, List} from 'components/Icons';

import {withContext} from '../../utils';
import {SwitcherView} from './style';

const renderIcon = withContext((props) => {
  const {Icon, type, activeView, toggleView} = props;
  const active = activeView === type;
  return (
    <Icon
      color={active ? '#323C46' : '#D9DCE1'}
      width={24}
      height={24}
      onClick={() => toggleView(type)}
    />
  );
});

interface Props {
  view: ViewTypes;
  toggleView: boolean;
}

const ToggleLayout: FunctionComponent<Props> = (props) => {
  const {view, toggleView} = props;
  return (
    <SwitcherView>
      {renderIcon({
        Icon: Grid,
        type: ViewTypes.grid,
        activeView: view,
        toggleView,
      })}
      {renderIcon({
        Icon: List,
        type: ViewTypes.list,
        activeView: view,
        toggleView,
      })}
    </SwitcherView>
  );
};

export default withContext(ToggleLayout);

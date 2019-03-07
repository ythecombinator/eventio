import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actions as authActions} from 'modules/auth/actions';
import {actions as eventsActions} from 'modules/events/actions';

import {select} from 'core/rootReducer';

const mapStateToProps = select((state) => ({
  ...state.events,
  user: state.auth.user,
}));

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      list: eventsActions.list.request,
      logout: authActions.signOut.request,
    },
    dispatch,
  );

export type MappedProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

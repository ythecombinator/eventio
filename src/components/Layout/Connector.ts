import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actions as authActions} from 'modules/auth/actions';

import {select} from 'core/rootReducer';

const mapStateToProps = select((state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
}));

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
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

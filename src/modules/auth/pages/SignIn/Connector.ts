import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {select} from 'core/rootReducer';

import {actions} from '../../actions';
import {getErrorMessage} from '../../selectors';

const mapStateToProps = select((state) => ({
  error: getErrorMessage(state),
  loading: state.auth.loading,
}));

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      login: actions.signIn.request,
    },
    dispatch,
  );

export type MappedProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);

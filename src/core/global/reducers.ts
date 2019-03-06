import {createReducer} from 'redux-act';
import {combineReducers} from 'redux';
import {actions} from './actions';

const initialState = {
  loading: false,
};

const loading = createReducer({}, initialState.loading)
  .on(actions.showLoading, (_state) => true)
  .on(actions.hideLoading, (_state) => false);

export default combineReducers({loading});

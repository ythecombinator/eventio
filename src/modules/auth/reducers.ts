import {createReducer} from 'redux-act';

import {actions} from './actions';
import {User} from './models';

const initialState = {
  user: {} as User,
  error: {message: ''} as Error,
  loading: false,
};

export default createReducer<typeof initialState>({}, initialState)
  .on(actions.signIn.request, (state) => ({
    ...state,
    loading: true,
  }))
  .on(actions.signIn.success, (state, payload) => ({
    ...state,
    user: payload,
    error: initialState.error,
    loading: false,
  }))
  .on(actions.signIn.failure, (state, payload) => ({
    ...state,
    error: payload,
    loading: false,
  }));

export type InitialState = typeof initialState;

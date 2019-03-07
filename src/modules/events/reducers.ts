import {createReducer} from 'redux-act';

import {actions} from './actions';
import {Event} from './models';

const initialState = {
  events: [] as Event[],
  error: {message: ''} as Error,
  loading: false,
};

export default createReducer<typeof initialState>({}, initialState)
  .on(actions.list.request, (state) => ({
    ...state,
    loading: true,
  }))
  .on(actions.list.success, (state, payload) => ({
    ...state,
    events: payload,
    error: initialState.error,
    loading: false,
  }))
  .on(actions.list.failure, (state, payload) => ({
    ...state,
    error: payload,
    loading: false,
  }));

export type InitialState = typeof initialState;

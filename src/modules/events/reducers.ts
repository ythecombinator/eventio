import produce from 'immer';
import {createReducer} from 'redux-act';

import {User} from 'modules/auth/models';

import {actions} from './actions';
import {Event} from './models';

const initialState = {
  events: [] as Event[],
  error: {message: ''} as Error,
  loading: true,
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
  }))
  .on(actions.attend.request, (state, payload) => ({
    ...state,
    loading: true,
    events: produce(state.events, (draftEvents) => {
      const {currentUser, id} = payload;

      const attendedEventIndex = draftEvents.findIndex((event: Event) => event.id === id);

      draftEvents[attendedEventIndex].attendees = draftEvents[attendedEventIndex].attendees.concat(
        currentUser,
      );

      console.log(draftEvents);

      return draftEvents;
    }),
  }))
  .on(actions.attend.success, (state) => ({
    ...state,
    loading: false,
  }))
  .on(actions.attend.failure, (_, payload) => ({
    events: payload.prevState,
    error: payload.err,
    loading: false,
  }))
  .on(actions.unattend.request, (state, payload) => ({
    ...state,
    loading: true,
    events: produce(state.events, (draftEvents) => {
      const {currentUser, id} = payload;

      const unattendedEventIndex = draftEvents.findIndex((event: Event) => event.id === id);

      draftEvents[unattendedEventIndex].attendees = draftEvents[
        unattendedEventIndex
      ].attendees.filter((user: User) => user.id !== currentUser.id);

      return draftEvents;
    }),
  }))
  .on(actions.unattend.success, (state) => ({
    ...state,
    loading: false,
  }))
  .on(actions.unattend.failure, (_, payload) => ({
    events: payload.prevState,
    error: payload.err,
    loading: false,
  }));

export type InitialState = typeof initialState;

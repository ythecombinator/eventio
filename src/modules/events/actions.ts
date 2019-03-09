import {createAction} from 'redux-act';

import {User} from 'modules/auth/models';

import {Event} from './models';

export type EventAttendenceRequest = {id: string; currentUser: User};

export type EventAttendenceError = {err: Error; prevState: Event[]};

const list = {
  request: createAction('events/LIST_REQUEST'),
  success: createAction<Event[]>('events/LIST_SUCCESS'),
  failure: createAction<Error>('events/LIST_FAILURE'),
};

const attend = {
  request: createAction<EventAttendenceRequest>('events/ATTEND_REQUEST'),
  success: createAction('events/ATTEND_SUCCESS'),
  failure: createAction<EventAttendenceError>('events/ATTEND_FAILURE'),
};

const unattend = {
  request: createAction<EventAttendenceRequest>('events/UNATTEND_REQUEST'),
  success: createAction('events/UNATTEND_SUCCESS'),
  failure: createAction<EventAttendenceError>('events/UNATTEND_FAILURE'),
};

export const actions = {
  list,
  attend,
  unattend,
};

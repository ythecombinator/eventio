import {createAction} from 'redux-act';

import {Event} from './models';

const list = {
  request: createAction('events/LIST_REQUEST'),
  success: createAction<Event[]>('events/LIST_SUCCESS'),
  failure: createAction<Error>('events/LIST_FAILURE'),
};

const attend = {
  request: createAction<string>('events/ATTEND_REQUEST'),
  success: createAction('events/ATTEND_SUCCESS'),
  failure: createAction<Error>('events/ATTEND_FAILURE'),
};

const unattend = {
  request: createAction<string>('events/UNATTEND_REQUEST'),
  success: createAction('events/UNATTEND_SUCCESS'),
  failure: createAction<Error>('events/UNATTEND_FAILURE'),
};

export const actions = {
  list,
  attend,
  unattend,
};

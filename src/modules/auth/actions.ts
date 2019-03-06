import {createAction} from 'redux-act';

import {User, UserCredentials} from './models';

const signIn = {
  request: createAction<UserCredentials>('auth/SIGN_IN_REQUEST'),
  success: createAction<User>('auth/SIGN_IN_SUCCESS'),
  failure: createAction<Error>('auth/SIGN_IN_FAILURE'),
};

const signOut = {
  request: createAction('auth/SIGN_OUT_REQUEST'),
  success: createAction('auth/SIGN_OUT_SUCCESS'),
  failure: createAction<Error>('auth/SIGN_OUT_FAILURE'),
};

export const actions = {
  signIn,
  signOut,
};

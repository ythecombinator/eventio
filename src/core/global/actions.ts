import {createAction} from 'redux-act';

export const actions = {
  showLoading: createAction('global/SHOW_LOADING'),
  hideLoading: createAction('global/HIDE_LOADING'),
};

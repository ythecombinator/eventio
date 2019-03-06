import {createSelector} from 'reselect';

import {RootState} from 'core/rootReducer';

const getError = (state: RootState) => state.auth.error;

const getErrorMessage = createSelector(
  [getError],
  (error) => {
    if (error.message.includes('400')) {
      return 'Oops! That email and pasword combination is not valid.';
    } else {
      return error.message;
    }
  },
);

export {getErrorMessage};

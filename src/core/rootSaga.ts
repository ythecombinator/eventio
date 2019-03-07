import {Store} from 'redux';
import {SagaMiddleware} from 'redux-saga';

import auth from 'modules/auth/sagas';
import events from 'modules/events/sagas';
import {cancel, fork, select, spawn, take} from 'redux-saga/effects';

import app from './global/sagas';
import {RootState, select as getState} from './rootReducer';

const globalSagas = [app];
const pagesSagas = [auth, events];

const __DEV__ = process.env.NODE_ENV !== 'production';
const CANCEL_SAGAS_HMR = 'CANCEL_SAGAS_HMR';

function* rootSaga() {
  yield globalSagas.map((saga) => spawn(saga));
  yield pagesSagas.map((saga) => fork(saga));
}

function createAbortableSaga(saga: any) {
  if (__DEV__) {
    return function* main() {
      const sagaTask = yield fork(saga);
      yield take(CANCEL_SAGAS_HMR);
      yield cancel(sagaTask);
    };
  }
  return saga;
}

export const getSelect = <T>(fn: (state: RootState) => T) => select(getState(fn));

export default {
  startSaga<T extends object>(sagaMiddleware: SagaMiddleware<T>) {
    return sagaMiddleware.run(createAbortableSaga(rootSaga));
  },
  cancelSaga(store: Store<RootState>) {
    store.dispatch({type: CANCEL_SAGAS_HMR});
  },
};

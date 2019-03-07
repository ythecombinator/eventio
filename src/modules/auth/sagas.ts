import {Action} from 'redux-act';
import {delay} from 'redux-saga';

import Router from 'next/router';
import {call, fork, put, takeLatest} from 'redux-saga/effects';

import {getCookie, setCookie} from 'utils/cookies';
import {decode, willExpireInGivenInterval} from 'utils/jwt';
import server from 'utils/server';

import {actions} from './actions';
import {UserCredentials} from './models';
import {authenticate} from './services';

function* checkTokenExpiration() {
  while (true) {
    const token = yield call(getCookie, 'authenticationToken');
    if (token) {
      const refreshToken = yield call(getCookie, 'refreshToken');
      const decodedToken = decode(token);
      const isAboutToExpire = willExpireInGivenInterval(decodedToken, 600);
      if (isAboutToExpire) {
        const response = yield call(authenticate, {refreshToken});
        yield call(setCookie, 'authenticationToken', response.headers.authorization);
        server.defaults.headers.common.APIKey = response.headers.authorization;
      }
    }

    yield call(delay, 1000);
  }
}

function* signIn(action: Action<UserCredentials>) {
  const {payload} = action;

  try {
    const response = yield call(authenticate, payload);
    yield call(setCookie, 'authenticationToken', response.headers.authorization);
    server.defaults.headers.common.APIKey = response.headers.authorization;
    yield call(setCookie, 'refreshToken', response.headers['refresh-token']);
    yield put(actions.signIn.success(response.data));
    yield call(Router.push, '/events');
  } catch (err) {
    yield put(actions.signIn.failure(err));
  }
}

function* signOut() {
  try {
    yield call(setCookie, 'authenticationToken', '');
    yield call(setCookie, 'refreshToken', '');
    yield put(actions.signOut.success());
    yield call(Router.push, '/sign-in');
  } catch (err) {
    yield put(actions.signOut.failure(err));
  }
}

export default function*() {
  yield fork(checkTokenExpiration);
  yield takeLatest(actions.signIn.request, signIn);
  yield takeLatest(actions.signOut.request, signOut);
}

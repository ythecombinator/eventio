import {call, put, takeLatest} from 'redux-saga/effects';

import {actions} from './actions';
import {list} from './services';

function* listEvents() {
  try {
    const response = yield call(list);
    yield put(actions.list.success(response.data));
  } catch (err) {
    yield put(actions.list.failure(err));
  }
}

export default function*() {
  yield takeLatest(actions.list.request, listEvents);
}

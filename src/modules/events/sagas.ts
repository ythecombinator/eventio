import {Action} from 'redux-act';

import {call, put, select, takeLatest} from 'redux-saga/effects';

import {RootState} from 'core/rootReducer';

import {actions, EventAttendenceRequest} from './actions';
import {Event} from './models';
import {attend, list, unattend} from './services';

function* listEvents() {
  try {
    const response = yield call(list);
    yield put(actions.list.success(response.data));
  } catch (err) {
    yield put(actions.list.failure(err));
  }
}

function* attendEvent(action: Action<EventAttendenceRequest>) {
  const {id} = action.payload;

  const events: Event[] = yield select((state: RootState) => state.events.events);

  try {
    yield call(attend, id);
    yield put(actions.attend.success());
  } catch (err) {
    yield put(actions.attend.failure({err, prevState: events}));
  }
}

function* unattendEvent(action: Action<EventAttendenceRequest>) {
  const {id} = action.payload;

  const events: Event[] = yield select((state: RootState) => state.events.events);

  try {
    yield call(unattend, id);
    yield put(actions.unattend.success());
  } catch (err) {
    yield put(actions.unattend.failure({err, prevState: events}));
  }
}

export default function*() {
  yield takeLatest(actions.list.request, listEvents);
  yield takeLatest(actions.attend.request, attendEvent);
  yield takeLatest(actions.unattend.request, unattendEvent);
}

import {combineReducers} from 'redux';

import auth from 'modules/auth/reducers';
import events from 'modules/events/reducers';

const rootObject = {auth, events};

export type RootState = {readonly [P in keyof typeof rootObject]: ReturnType<typeof rootObject[P]>};

export const select = <T>(fn: (state: RootState) => T) => fn;

export const rootReducer = combineReducers<RootState>(rootObject);

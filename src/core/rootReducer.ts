import {combineReducers} from 'redux';

import auth from '../modules/auth/reducers';
import global from './global/reducers';

const rootObject = {global, auth};

export type RootState = {readonly [P in keyof typeof rootObject]: ReturnType<typeof rootObject[P]>};

export const select = <T>(fn: (state: RootState) => T) => fn;

export const rootReducer = combineReducers<RootState>(rootObject);

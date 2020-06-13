import { combineReducers } from 'redux';
import usersReducer from './users/reducers';
import { AppState } from './types';

const rootReducers = combineReducers<AppState>({
  USERS: usersReducer,
});

export default rootReducers;

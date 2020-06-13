import { createReducer, ActionType } from 'typesafe-actions';
import { UserState } from './types';
import * as actions from './actions';

const INITIAL_STATE = {
  data: [],
  isError: false,
  isSuccess: true,
  isLoading: false,
  messages: [],
};

type ActionsTypes = ActionType<typeof actions>;

const reducer = createReducer<UserState, ActionsTypes>(INITIAL_STATE)
  .handleType('CREATE_USER', (state, action) => ({
    ...state,
    data: [...state.data, {
      uid: Date.now().toString(), ...action.payload,
    }],
  }));

export default reducer;

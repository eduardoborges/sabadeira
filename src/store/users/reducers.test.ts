import reducer from './reducers';
import * as actions from './actions';
import { UserState } from './types';

describe('@store/users/reducers', () => {
  const INITIAL_STATE:UserState = {
    data: [],
    messages: ['foo'],
    isLoading: true,
    isError: true,
    isSuccess: true,
  };

  test('#test create_user action type', () => {
    const action = actions.createUser({ name: 'foo', email: 'bar' });
    const newState = reducer(INITIAL_STATE, action);

    expect(newState.data[0].uid).toMatch(/[0-9]{3,}/g);
    expect(newState.data[0].email).toEqual('bar');
    expect(newState.data[0].name).toEqual('foo');
    expect(newState.isError).toEqual(INITIAL_STATE.isError);
    expect(newState.isSuccess).toEqual(INITIAL_STATE.isSuccess);
    expect(newState.isLoading).toEqual(INITIAL_STATE.isLoading);
    expect(newState.messages).toEqual(INITIAL_STATE.messages);
  });
});

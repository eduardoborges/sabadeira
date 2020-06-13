import * as actions from './actions';

describe('@store/users/actions', () => {
  test('#create_user action', () => {
    const action = actions.createUser({ email: 'foo', name: 'bar' });

    expect(action).toEqual({
      type: 'CREATE_USER',
      payload: {
        name: 'bar',
        email: 'foo',
      },
    });
  });

  test('#create_user empty payload action', () => {
    // @ts-ignore
    const action = actions.createUser();
    expect(action).toEqual({
      type: 'CREATE_USER',
    });
  });

  test('#create_user empty email action', () => {
    // @ts-ignore
    const action = actions.createUser({ email: 'foo' });
    expect(action).toEqual({
      type: 'CREATE_USER',
      payload: {
        email: 'foo',
      },
    });
  });

  test('#create_user empty name action', () => {
    // @ts-ignore
    const action = actions.createUser({ name: 'foo' });
    expect(action).toEqual({
      type: 'CREATE_USER',
      payload: {
        name: 'foo',
      },
    });
  });
});

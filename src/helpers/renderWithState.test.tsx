import React from 'react';
import render, { INITIAL_STORE_STATE } from './renderWithState';

describe('@helpers/renderWithState', () => {
  test('check helper works', () => {
    const initialState = {
      USERS: {
        ...INITIAL_STORE_STATE.USERS,
        isLoading: true,
      },
    };

    const { wrapper, state } = render(initialState, <div className="bar" data-testid="foo-test">Foo</div>);

    //  test ui
    const el = wrapper.queryByTestId('foo-test');
    expect(el?.innerHTML).toEqual('Foo');
    expect(el?.classList.value).toEqual('bar');
    expect(el?.tagName).toMatch(/div/i);

    // test state
    expect(state).toEqual(initialState);
  });
});

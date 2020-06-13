import React from 'react';
import configure from 'store/configure';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppState } from 'store/types';
import reducers from 'store/reducers';
import { render } from '@testing-library/react';

export const INITIAL_STORE_STATE = configure.getState();

const renderWithState = (initialState: Partial<AppState>, component:JSX.Element) => {
  const store = createStore(reducers, { ...configure.getState(), ...initialState });

  const wrapper = render(
    <Provider store={store}>
      {component}
    </Provider>,
  );

  const state = store.getState();

  return { wrapper, state };
};

export default renderWithState;

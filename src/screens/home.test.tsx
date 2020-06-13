import React from 'react';
import render, { INITIAL_STORE_STATE } from 'helpers/renderWithState';
import { AppState } from 'store/types';
import { fireEvent } from '@testing-library/dom';
import Screen from './home';

describe('@screens/home', () => {
  test('#check renders properly', () => {
    const toRenderState: AppState = {
      USERS: {
        ...INITIAL_STORE_STATE.USERS,
        data: [{
          uid: '123',
          name: 'Foo',
          email: 'bar',
        }],
      },
    };

    const { wrapper, state } = render(toRenderState, <Screen />);

    const title = wrapper.queryAllByText(/DuBank/);
    expect(title).toHaveLength(1);
    expect(title[0].classList.value).toEqual('title');
    expect(title[0].tagName).toMatch(/h1/i);

    expect(toRenderState).toEqual(state);
  });

  test('#check loading spinner', async () => {
    const toRenderState: AppState = {
      USERS: {
        ...INITIAL_STORE_STATE.USERS,
        isLoading: true,
      },
    };

    const { wrapper } = render(toRenderState, <Screen />);

    expect(wrapper.queryByText(/Carregando.../)).not.toBeUndefined();
  });

  test('#check render guys', () => {
    const toRenderState: AppState = {
      USERS: {
        ...INITIAL_STORE_STATE.USERS,
        data: [
          {
            uid: '0',
            name: 'Fulano',
            email: 'fulano@stone.com.br',
          },
          {
            uid: '1',
            name: 'Beltrano',
            email: 'beltrano@stone.com.br',
          },
        ],
      },
    };

    const { wrapper } = render(toRenderState, <Screen />);
    const renderedGuys = wrapper.getByTestId('render-guys');
    expect(renderedGuys.childNodes).toHaveLength(2);
    expect(Array.from(renderedGuys.childNodes).every((el) => /li/i.test(el.nodeName))).toBeTruthy();

    expect(wrapper.queryAllByText(/Fulano/)).toHaveLength(1);
    expect(wrapper.queryAllByText(/fulano@stone.com.br/)).toHaveLength(1);
    expect(wrapper.queryAllByText(/Beltrano/)).toHaveLength(1);
    expect(wrapper.queryAllByText(/beltrano@stone.com.br/)).toHaveLength(1);
  });

  test('#test add user click', () => {
    const { wrapper } = render({}, <Screen />);

    const nameInput = wrapper.queryByPlaceholderText(/Insira seu nome/) as HTMLElement;
    const emailInput = wrapper.queryByPlaceholderText(/Insira seu email/) as HTMLElement;
    const submitBtn = wrapper.queryByText(/Add usuário/) as HTMLElement;

    fireEvent.change(nameInput, { target: { value: 'foo' } });
    expect(nameInput.attributes.getNamedItem('value')?.value).toEqual('foo');

    fireEvent.change(emailInput, { target: { value: 'bar' } });
    expect(emailInput.attributes.getNamedItem('value')?.value).toEqual('bar');

    fireEvent.click(submitBtn);
    expect(wrapper.queryAllByText(/foo/)).toHaveLength(1);
    expect(wrapper.queryAllByText(/bar/)).toHaveLength(1);
  });
});

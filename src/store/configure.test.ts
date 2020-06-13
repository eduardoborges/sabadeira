import configure from './configure';

describe('@store/configure', () => {
  test('check configure is properly', () => {
    expect(configure).toHaveProperty('getState');
    expect(configure).toHaveProperty('subscribe');
    expect(configure).toHaveProperty('replaceReducer');
    expect(configure).toHaveProperty('dispatch');
  });
});

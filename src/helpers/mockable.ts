import { AxiosPromise } from 'axios';

export default function mockable<T>(
  data: T, status = 200, timeout = 1000,
): AxiosPromise<T> {
  if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-console
    console.log('= mocked response = ', data);
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const send = (status >= 200 && status <= 205) ? resolve : reject;
      send({
        data,
        status,
        config: {},
        statusText: 'ok',
        headers: [],
      });
    }, timeout);
  });
}

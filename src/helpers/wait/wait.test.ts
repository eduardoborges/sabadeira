import wait from './wait';

describe('=> helpers / wait', () => {
  it('#test default timeout', async () => {
    const start = Date.now();
    await wait();
    const end = Date.now();
    const time = end - start;
    const roundedTime = Math.round(time / 100) * 100;
    expect(roundedTime).toEqual(700);
  });

  it('#test set timeout', async () => {
    const start = Date.now();
    await wait(1200);
    const end = Date.now();
    const time = end - start;
    const roundedTime = Math.round(time / 100) * 100;
    expect(roundedTime).toEqual(1200);
  });
});

const wait = (ms = 700) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

export default wait;

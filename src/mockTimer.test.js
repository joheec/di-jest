let timer;

function runSetTimeout(callback) {
  timer = setTimeout(() => {
    callback && callback()
  }, 1000);
}

function runClearTimeout() {
  clearTimeout(timer);
}

function runSetInterval(callback) {
  setInterval(() => {
    callback && callback()
  }, 1000);
}

// Enables fake timers: setTimeout, setInterval, clearTimeout
jest.useFakeTimers();

describe('swap out timers', () => {
  test('replaced setTimeout', () => {
    runSetTimeout();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test('internal usage counter is not reset', () => {
    expect(setTimeout).not.toHaveBeenCalledTimes(0);
  });
});

describe('resetting internal usage counter', () => {
  beforeEach(() => {
    // calling `.useFakeTimers()` resets internal usage counter
    jest.useFakeTimers();
    runSetInterval()
  });

  // Reminder: beforeEach runs before each TEST.
  // setInterval's internal usage counter resets
  // between files and describe blocks
  expect(setInterval).toHaveBeenCalledTimes(0);

  test('setInterval ran before test', () => {
    expect(setInterval).toHaveBeenCalledTimes(1);
  });

  test('setInterval reset and ran before test', () => {
    expect(setInterval).toHaveBeenCalledTimes(1);
  });
});

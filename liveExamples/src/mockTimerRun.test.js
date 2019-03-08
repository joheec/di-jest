function nonRecursiveSetTimeout(callback) {
  setTimeout(() => callback(), 1000);
}

describe('running timers', () => {
  test('check timer executed', () => {
    // Need to mock timers
    jest.useFakeTimers();

    const callback = jest.fn();
    nonRecursiveSetTimeout(callback);
    // At this point, the callback should not have been called yet
    expect(callback).not.toBeCalled();

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    // Now our callback should have been called
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('running times queued to execute within a given time', () => {
    jest.useFakeTimers();
    const callback = jest.fn();

    nonRecursiveSetTimeout(callback);

    // Callback should not have been called yet
    expect(callback).not.toBeCalled();

    // Fast-forward by passed in time (ms), until all timers are executed
    jest.advanceTimersByTime(1000);

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

function recursiveSetTimeout(callback) {
  setTimeout(() => {
    callback && callback();
    setTimeout(() => {
      recursiveSetTimeout(callback);
    }, 10000);
  }, 1000);
}

describe('recursively run timers', () => {
  const callback = jest.fn();
  test('run initial timer', () => {
    jest.useFakeTimers();
    recursiveSetTimeout(callback);

    // Should have called setTimeout
    // at least once by now
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  test('run proceeding timer + clear pending timers', () => {
    // Fast forward and exhaust only currently pending timers
    // but not any new timers that get created during that process
    // to prevent infinite calls
    jest.runOnlyPendingTimers();

    // 1 second timer should have fired
    expect(callback).toBeCalled();

    // 10 second timer should have been initiated
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);

    // Clear pending timers
    jest.clearAllTimers();

    // Fast-forward by passed in time (ms), until all timers are executed
    jest.advanceTimersByTime(10000);

    expect(setTimeout).toHaveBeenCalledTimes(2);
  });

});

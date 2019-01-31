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
});

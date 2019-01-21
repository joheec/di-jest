const { fetchCallback }  = require('./asyncSetup');

// Jest test complete once they reach the end of their execution
test('Callback will not execute as intended by default.', () => {
  function callback(data) {
    expect(data).toBe('success');
    console.log('Does not reach here');
  }
  fetchCallback(callback);
  // console.log('Completes execution before completing callback');
});


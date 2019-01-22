const { fetchCallback } = require('./setup');

// **NOTE: Better to use patterns in correct.test.js
// **NOTE: This is in its own file because just by having `done` in the parameters triggers waiting for all async functions in this file.
// `done()` makes Jest wait until its callback is called before finishing test
// Don't forget to include `done` in the parameters
test('Callback will execute as intended.', done => {
  function callback(data) {
    expect(data).toBe('success');
    // console.log('Executes callback');
    done()
  }
  fetchCallback(callback);
  // console.log('Completes execution after completing callback');
});

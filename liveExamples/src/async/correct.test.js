// To enable async/await in project, need @babel/preset-env
// and the feature enabled in the babel file.
const {
  fetchResolve,
  fetchReject,
} = require('./setup');

// **NOTE: General asychronous testing notes
// `.assertions` Verifies that a certain number of assertions are called. Good for asynchronous tests
// Returning a promise from a test forces Jest to wait for that promise to resolve.
// Using Jest to test Throw is in throw.test.js

describe('Promise resolves', () => {
  test('Return promise forces Jest to wait for promise to resolve/reject', () => {
    return fetchResolve();
    // Test will fail if the promise is rejected
    // return fetchReject();
  });
  
  test('assert resolve value.', () => {
    expect.assertions(1);
    // MUST return assertion, otherwise will complete test before fetchResolve completes
    return fetchResolve().then(data => expect(data).toBe('success'));
  });
  
  test('resolves', () => {
    expect.assertions(1);
    // MUST return assertion, otherwise will complete test before fetchResolve completes
    // `.resolves` is less verbose by not requiring a .then
    return expect(fetchResolve()).resolves.toBe('success');
  });
  
  test('async resolve', async () => {
    expect.assertions(2);
    const data = await fetchResolve();
    expect(data).toBe('success');
    // Don't need to return the Promise when using async/await
    // `.resolves` is less verbose by not requiring a .then
    await expect(fetchResolve()).resolves.toBe('success');
  });
});

describe('Promise rejects', () => {
  test('catch', () => {
    // MUST INCLUDE `.assertions`, otherwise a fulfilled promise will not fail the test
    expect.assertions(1);
    // MUST return promise, otherwise will complete test before fetchReject completes
    return fetchReject().catch(e => expect(e).toMatch('error'));
  });
  
  test('rejects', () => {
    expect.assertions(1);
    // MUST return promise, otherwise will complete test before fetchReject completes
    // Using `.rejects` will cause the test to fail if it returns a resolve
    return expect(fetchReject()).rejects.toMatch('error');
  });
  
  test('async reject', async () => {
    expect.assertions(2);
    try {
      // Don't need to return the Promise when using async/await
      await fetchReject();
    } catch (e) {
      expect(e).toMatch('error');
    }
    // Don't need to return the Promise when using async/await
    await expect(fetchReject()).rejects.toMatch('error');
  });
});

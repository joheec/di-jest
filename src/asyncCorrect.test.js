const {
  fetchResolve,
  fetchReject,
} = require('./asyncSetup');

// **NOTE: General asychronous testing notes
// `.assertions` Verifies that a certain number of assertions are called. Good for asynchronous tests
// Returning a promise from a test forces Jest to wait for that promise to resolve.
// Using Jest to test Throw is in throw.test.js

test('Return promise forces Jest to wait for promise to resolve/rejct', () => {
  return fetchResolve();
  // Test will fail if the promise is rejected
  // return fetchReject();
});

test('assert resolve value.', () => {
  expect.assertions(1);
  // MUST return assertion, otherwise will complete test before fetchResolve completes
  return fetchResolve().then(data => expect(data).toBe('success'));
});

test('catch', () => {
  // MUST INCLUDE `.assertions`, otherwise a fulfilled promise will not fail the test
  expect.assertions(1);
  // MUST return assertion, otherwise will complete test before fetchReject completes
  return fetchReject().catch(e => expect(e).toMatch('error'));
});

test('resolves', () => {
  expect.assertions(1);
  // MUST return assertion, otherwise will complete test before fetchResolve completes
  return expect(fetchResolve()).resolves.toBe('success');
});

test('rejects', () => {
  expect.assertions(1);
  // MUST return assertion, otherwise will complete test before fetchReject completes
  return expect(fetchReject()).rejects.toMatch('error');
});

test('async resolve', async () => {
  expect.assertions(2);
  const data = await fetchResolve();
  expect(data).toBe('success');
  await expect(fetchResolve()).resolves.toBe('success');
});

test('async reject', async () => {
  expect.assertions(2);
  try {
    await fetchReject();
  } catch (e) {
    expect(e).toMatch('error');
  }
  await expect(fetchReject()).rejects.toMatch('error');
});

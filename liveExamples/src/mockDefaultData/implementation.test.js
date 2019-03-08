// Data for mocked module
// that is used in ./implementation.js > runImplementation
// is grabbed from __mocks__ in this directory
// by default
// (Mock must be adacent to module it's mocking,
// unless configured otherwise.
// Directory name is case sensitive.).
jest.mock('./module');
import { runImplementation } from './implementation';

describe('mocked module', () => {
  test('default mocked data', () => {
    // Assertion for a promise must be returned
    expect.assertions(1);
    return runImplementation('key1')
      .then(value => expect(value).toEqual(1));
  });
});

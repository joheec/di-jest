// Data for mocked module
// that is used in ./implementation.js > runImplementation
// is grabbed from __mocks__ in this directory
// by default.
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

import axios from 'axios';
import { Cities } from './importSetup.js';
// jest.mock is hoisted to the top of its scope, not the top of Program.
// jest.mock needs to be in the same scope as the import of axios
jest.mock('axios');

describe('mocking the axios module used in Cities', () => {
  test('mock axios.get response with mockResolvedValue', () => {
    const mockedResponse = { city: 'Portland' };
    axios.get.mockResolvedValue(mockedResponse);
    // Need to return the promise. More details in asyncCorrect.test.js.
    return Cities.all()
      .then(cities => expect(cities).toEqual(mockedResponse));
  });

  test('mock axios.get response with mockImplementation', () => {
    const mockedResponse = { city: 'Austin' };
    // Returns a promise to mimic the original axios.get implementation
    axios.get.mockImplementation(() => Promise.resolve(mockedResponse));
    // Need to return the promise. More details in asyncCorrect.test.js.
    return Cities.all()
      .then(cities => expect(cities).toEqual(mockedResponse));
  });
});

describe('mocking function created in another module', () => {
  // jest.mock is hoisted to the top of its scope, not the top of Program.
  // jest.mock needs to be in the same scope as the import of ReturnTrue
  jest.mock('./importSetup.js');
  const { ReturnTrue } = require('./importSetup.js');

  test('imported function is replaced', () => {
    ReturnTrue.mockImplementation(() => false);
    expect(ReturnTrue()).toBeFalsy();
  });

  test('multiple implementations', () => {
    ReturnTrue
      .mockImple
  });
});

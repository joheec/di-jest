import esSixClass from './index';

// imported class, esSixClass, is not a mock constructor
jest.mock('./index');

describe('mocked es6 class', () => {
  const esSixInstance = new esSixClass();
  it('will not include arrow functions in class mock', () => {
    expect(esSixInstance.arrowFunction).toBeUndefined();
  })
  it('will include non-arrow functions in class mock', () => {
    expect(esSixInstance.notArrowFunction).toBeInstanceOf(Function);
  })
});

describe('mocked es6 class', () => {
  beforeEach(() => {
    // Clears all instances and calls to constructor and all methods
    esSixClass.mockClear();
  });
});

let cities = {};

const initialize = () => {
  cities = {
    Portland: false,
  };
};

const clear = () => {
  cities = {};
};

// `describe` is used for scoping before and after to specific tests. Example in scope.test.js.
describe('each', () => {
  // if initialize or clear were promises, would want them returned in beforeEach/afterEach
  // Reference async/correct.test.js
  beforeEach(() => {
    initialize();
    // if initialize is a promise
    // return initialize();
  });
  afterEach(() => {
    clear();
    // if clear is a promise
    // return clear();
  });

  test('before and after test', () => {
    cities.Portland = true;
    expect(cities).not.toEqual({});
    expect(cities.Portland).toBeTruthy();
  });
});

// `describe` is used for scoping before and after to specific tests. Example in scope.test.js.
describe('all (one-time)', () => {
  beforeAll(() => {
    // returning a promise waits for it to resolve/reject before continuing
    return initialize();
  });
  afterAll(() => {
    // returning a promise waits for it to resolve/reject before continuing
    return clear();
  });

  test('after setup', () => {
    expect(cities.Portland).toBeFalsy();
    cities.Portland = true;
  });
  test('does not reset', () => {
    expect(cities.Portland).toBeTruthy();
  });
});

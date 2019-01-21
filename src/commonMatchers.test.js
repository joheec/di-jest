test('not', () => {
  // `.not` tests the opposite of a matcher
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a+b).not.toBe(0);
    }
  }
});

test('toBe', () => {
  // `expect` function returns "expectation" object
  // `.toBe` is a matcher. Uses `Object.is` to test exact equality
  expect(2 + 2).toBe(4);
});

// `.toBeNull` matches only null
// `.toBeUndefined` matches only undefined
// `.toBeDefined` is the opposite of toBeUndefined
// `.toBeTruthy` matches anything that an if statement treats as true
// `.toBeFalsy` matches anything that an if statement treats as false

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

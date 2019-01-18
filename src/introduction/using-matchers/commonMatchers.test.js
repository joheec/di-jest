test('toBe', () => {
  // `expect` function returns "expectation" object
  // `.toBe` is a matcher. Uses `Object.is` to test exact equality
  expect(2 + 2).toBe(4);
});

test('toEqual', () => {
  const data = {one: 1};
  data['two'] = 2;
  // `.toEqual` recursively checks every field of an object or array.
  expect(data).toEqual({one: 1, two: 2});
});

test('not', () => {
  // `.not` tests the opposite of a matcher
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a+b).not.toBe(0);
    }
  }
});

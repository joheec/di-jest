test('number comparisons', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // `.toBe` and `.toEqual` are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('floating number comparisons', () => {
  const value = 0.1 + 0.2;
  // `.not.toBe` because of rounding error
  expect(value).not.toBe(0.3);
  expect(value).toBeCloseTo(0.3);
});

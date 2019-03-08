test('toEqual', () => {
  const data = {one: 1};
  data['two'] = 2;
  // `.toEqual` recursively checks every field of an object or array.
  expect(data).toEqual({one: 1, two: 2});
});

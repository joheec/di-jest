const shoppingList = [
  'diapers',
  'kleenex',
  'beer',
];

test('toContain', () => {
  const item = shoppingList[0];
  expect(shoppingList).toContain(item);
});

test('toEqual', () => {
  const data = [{one: 1}, {two: 2}];
  // `.toEqual` recursively checks every field of an object or array.
  expect(data).not.toEqual({one: 1}, {two: 3});
});


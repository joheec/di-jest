const shoppingList = [
  'diapers',
  'kleenex',
  'beer',
];

test('toContain', () => {
  expect(shoppingList).toContain('beer');
});

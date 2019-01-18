// Checks regular expressions

test('not toMatch', () => {
  expect('team').not.toMatch(/I/);
});

test('toMatch', () => {
  expect('Christoph').toMatch(/stop/);
});

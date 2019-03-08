// Can check regular expressions

test('not toMatch', () => {
  expect('team').not.toMatch(/I/);
});

test('toMatch', () => {
  expect('Christoph').toMatch(/stop/);
  expect('Portland').toMatch('Portland');
});

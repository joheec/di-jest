// Run only one test
test.only('Only test that runs', () => {
  expect(true).toBeTruthy();
});

test('Won\'t run', () => {
  expect(true).toBeFalsy();
});

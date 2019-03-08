describe('Chose which tests to run in a file', () => {
  // Scope of `.only` applies to the entire file
  test.only('Only test that runs', () => {
    expect(true).toBeTruthy();
  });
  
  test('Won\'t run', () => {
    expect(true).toBeFalsy();
  });
});

test.only('Display mock function names in test error output instead of "jest.fn()"', () => {
  const myMockFn = jest
    .fn()
    .mockReturnValue(true)
    .mockName('DebuggingName');
  // Was unable to get this to work :'(
  // expect(myMockFn()).toBeFalsy();
});

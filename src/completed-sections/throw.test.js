class ConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConfigError";
  }
}

function attempt() {
  throw new ConfigError('you\'re attempt failed');
}

test('toThrow', () => {
  expect(attempt).toThrow();
  expect(attempt).toThrow(ConfigError);

  // Can check exact error message or regexp
  expect(attempt).toThrow('you\'re attempt failed');
  expect(attempt).toThrow(/fail/);
});

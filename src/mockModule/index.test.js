// Need to explicitly mock the fs module
// because it is a core Node module
jest.mock('fs');

// jest.mock(path, [moduleFactory=function])
// moduleFactory: function that returns the mock

describe('mocked core Node module', () => {
  const MOCK_FILE_INFO = {
    '/path/to/file1.js': 'console.log("file1 contents");',
    '/path/to/file1.txt': 'file2 contents',
  };

  beforeEach(() => {
    // Set up mocked file info before each test
    require('fs').__setMockFiles(MOCK_FILE_INFO);
  });

  test('mocked fs module', () => {
    const FileLister = require('./index');
    const files = FileLister.listFiles('/path/to');

    expect(files.length).toBe(2);
  });
});

// Node's core modules (i.e. fs, path)
// need to be explicitly called.

const path = require('path');

// Overrides default behavior
// with mock.
// Better than making manual mock.
// To require real module
// use `jest.requireActual(moduleName)`,
// then amend with mock functions before exporting it.
const fs = jest.genMockFromModule('fs');

let mockFiles = Object.create(null);

function __setMockFiles(newMockFiles) {
  mockFiles = Object.create(null);
  for (const file in newMockFiles) {
    const dir = path.dirname(file);

    if (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file))
  }
}

function readdirSync(directoryPath) {
  return mockFiles[directoryPath] || [];
}

fs.__setMockFiles = __setMockFiles;
fs.readdirSync = readdirSync;

module.exports = fs;

// The directory name containing the mocks, __mocks__,
// is case sensitive
// (Mock must be adacent to module it's mocking,
// unless configured otherwise.
// An installed module should have a __mocks__
// directory adjacent to node_modules
// to not need to be explicitly called,
// except for Node's core modules (i.e. fs, path).
// Scoped modules can be mocked by creating a file
// in a direcotry structure that matches the name of the scoped module.
// Example: @scope/project-name > __mocks__/@scoped/project-name.js
// Core Node modules are not mocked by default
// Directory name is case sensitive.).
const values = {
  key1: 1,
  key2: 2,
};

export default function runModule(key) {
  return new Promise((resolve, reject) => {
    // process is a global object from
    // Node.js core API.
    // `nextTick` defers execution fo function
    // until the next event loop iteration.
    process.nextTick(() => values[key]
      ? resolve({ value: values[key] })
      : reject({
        error: 'Value not found for ' + key,
      }),
    );
  });
}

// To opt out of automatically created mock
// Need to explicitly call `jest.unmock('moduleName')`
// in the test using the module implementation.

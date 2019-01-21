// Specific features of Jest. Able to use as standalone packages.

describe('jest-changed-files', () => {
  const { getChangedFilesForRoots, findRepos } = require('jest-changed-files');

  // Unable to get to print out useful info
  test('Changed files and repos via git', () => {
    // need path to test file, including file name
    getChangedFilesForRoots(['./src/troubleshooting.test.js'], {
      lastCommit: false,
      withAncestor: true,
    })
      .then(result => {
        //console. log(result)
      })
      .catch(err => console.log(err));
  });
  
  // Unable to get to print out useful info
  test('findRepos', () => {
    findRepos(['./src/troubleshooting.test.js'])
      .then(repos => {
        // console.log(repos)
      });
  });
});

describe('jest-diff', () => {
  test('visualization of differences between 2 args', () => {
    const diff = require('jest-diff');
    const a = { a: { b: { c: 5 } } };
    const b = { a: { b: { c: 6 } } };

    const result = diff(a, b);
    //console.log(result);
  });
});

describe('jest-docblock', () => {
  test('extraction and parsing of comments at top of JS file. Can manipulate data isnide comment block with exported functions.', () => {
    const { parseWithComments } = require('jest-docblock');
    const code = `
      /**
       * This is a sample
       *
       * @flow
       */
      console.log('Hello World');
    `;

    // prints an object w/ two attributes: comments and pragmas.
    //console.log( parseWithComments(code));
  });
});

describe('jest-get-type', () => {
  test('identifies primitive type of JS value via a string', () => {
    const getType = require('jest-get-type');

    const array = [1, 2, 3];
    expect(getType(array)).toEqual('array');

    const object = { one: 1, two: 2 };
    expect(getType(object)).toBe('object');

    const nullValue = null;
    expect(getType(nullValue)).toMatch('null');

    const undefinedValue = undefined;
    expect(getType(undefinedValue)).not.toBeUndefined();
  });
});

describe('jest-validate', () => {
  test('validation of configs', () => {
    const { validate } = require('jest-validate');

    // User's configurations
    const config = {
      transform: '<rootDir>/node_modules/my-custom-tranform',
    };
    
    // Second param contains example config and other options
    const result = validate(config, {
      comment: 'Documentation: http://custom-docs.com',
      exampleConfig: {transform: '<rootDir>/node_modules/babel-jest'},
    });

    // result should consist of {
    //  hasDeprecationWarnings: boolean indicating if submittedconfig has deprecation warnings
    //  isValid: boolean indicating if config is correct or not
    // }
  });
});

describe('jest-worker', () => {
  function fetchResolve() {
    return new Promise(resolve =>
      setTimeout(() => resolve('success'), 500)
    );
  }

  test('parallelization of tasks', () => {
    const Worker = require('jest-worker');
    
    async function main() {
      const worker = new Worker(require.resolve(fetchResolve));

      // run 2 tasks in parallel with different arguments
      const results = await Promise.all([
        worker.fetchResolve(),
        worker.fetchResolve(),
      ]);

      //console.log(results);
    }
  });
});

describe('pretty-format', () => {
  test('JS conversion into human-readable string', () => {
    const prettyFormat = require('pretty-format');
    const val = { object: {} };
    val.circularReference = val;
    val[Symbol('foo')] = 'foo';
    val.map = new Map([['prop', 'value']]);
    val.array = [-0, Infinity, NaN];
    
    //console.log(prettyFormat(val));
  });
});

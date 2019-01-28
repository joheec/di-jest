import React from 'react';
import Setup from './setup';
import renderer from 'react-test-renderer';

describe('best practices', () => {
  test('not ideal for TDD', () => {
    // Snapshots help figure out whether the output of  modules covered by tests is changed,
    // rather than giving guidance to design the code in the first place
  });
  test('commit snapshots and review as part of regular code review process', () => {
    // As of Jest 20, will not automatically write snapshots in a CI system without passing --updateSnapshot
    // which is discouraged because all snapshots will automatically pass.
    // Instead, always commit snapshots and keep them in version control
  });
  test('tests should be deterministic. Use mocks or property matchers to enforce this', () => {});
  test('use descriptive test and snapshot names. Best names describe expect snapshot content', () => {});
});

describe('main snapshot tools', () => {
  test('generated serialized value for React tree', () => {
    // Snapshot file is created the first time this test is run
    // Snapshot artifact should be committed alongside code changes and reviewed
    // All calls and the name of the mock is written as a snapshot
    const tree = renderer.create(<Setup />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('inline snapshot', () => {
    // To use inline snapshots you must have prettier installed in your project.
    // If you have prettier installed in a location where Jest can't find it,
    // you can tell Jest how to find it using the 'prettierPath' configuration property.
    const tree = renderer.create(<Setup />).toJSON();
    // Lines in `toMatchInlineSnapshot` were created by renderer's create
    expect(tree).toMatchInlineSnapshot(`
<div>
  Portland, ME
</div>
`);
  });
});

describe('property matchers', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'DiJest'
  };

  test('generated fields will fail every time', () => {
    // expect(user).toMatchSnapshot();
  });

  test('generated fields will pass every time', () => {
    expect(user).toMatchSnapshot({
      // used matcher for inconsistent value
      createdAt: expect.any(Date),
      id: expect.any(Number),
      // name is optional to have in passed toMatchSnapshot object
      // checked exactly and saved to snapshot because no matcher
      name: 'DiJest',
    });
  });
});

describe('snapshot flags', () => {
  test('update snapshot artifacts for all failing tests', () => {
    // `jest --updateSnapshot` or `jest -u`
  });

  test('Update snapshots in specific tests using regex', () => {
    // `jest --updateSnapshot --testNamePattern=<regex>`
    //
    // Example: `jest -u --testNamePattern=renderer
    // This will update the following snapshot in this file because of text in describe:
    // describe('react-test-render', () => {
    //   test('generated serialized value for React tree', () => {...})
    // })
    //
    // Example: `jest -u --testNamePattern=serialized
    // This will update the following snapshot in this file because of text in test:
    // describe('react-test-render', () => {
    //   test('generated serialized value for React tree', () => {...})
    // })
  });

  test('Update failed snap shot interactively', () => {
    // 1) Run jest in watch mode: `jest test`
    // 2) Run interactively from 'Watch Usage': `i`
    // 3) Look at 'Watch Usage' documentation, onscreen to see interactive commands
  });
});

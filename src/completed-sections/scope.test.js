// Executes all describe handlers before actual tests.
describe('layer-1', () => {
  // console.log('printed 1st');

  describe('layer-2', () => {
    // console.log('printed 2nd');

    test('layer-3', () => {
      // console.log('printed 6th');
    });
  });

  // console.log('printed 3rd');

  test('layer-2', () => {
    // console.log('printed 7th');
  });

  describe('layer-2', () => {
    // console.log('printed 4th');

    test('layer-3', () => {
      // console.log('printed 8th');
    });
  });

  // console.log('printed 5th');
});

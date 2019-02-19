describe('mocked method', () => {
  const matchMedia = {
    matches: false,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
  // Will not work if window.matchMedia is used in tested file
  // Will need to import mock file before importing tested method
  // i.e.
  // import './matchMedia.mock';
  // import { testedMethod } from './tested_file';
  window.matchMedia = jest.fn().mockImplementation(() => {
    return matchMedia;
  });
  it('sets the DOM method', () => {
    expect(window.matchMedia()).toBe(matchMedia);
  })
});

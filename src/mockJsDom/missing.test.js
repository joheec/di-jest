// Jest uses JSDOM to represent DOM. Some DOM methods are not implemented
describe('missing method', () => {
  it('cannot find DOM method', () => {
    expect(window.matchMedia).toBeUndefined();
  })
});

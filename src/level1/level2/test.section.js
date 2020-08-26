module.exports = x => {
  describe('level 2.function block', () => {
    beforeEach(() => console.log('2 - beforeEach'))
    afterEach(() => console.log('2 - afterEach'))
    test('level2 test', () => console.log('level 2 - function call', x))
    require('./level3/test.section')(3)
    // (async () => {
    //   await import('./level3/test.section')
    // })();
  })
}


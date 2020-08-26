import _ from 'lodash'

module.exports = x => {
  describe('level 3.function block', () => {
    beforeEach(() => console.log('3 - beforeEach'))
    afterEach(() => console.log('3 - afterEach'))
    console.log(_)
    test('', () => console.log('level 3 - function call', x))
  })
}


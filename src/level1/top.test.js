//import specSection from './demo.spec.section'

// this is the play ground to demo the scoping and Order of execution
// enhance the code from https://jestjs.io/docs/en/setup-teardown
describe('1. the whole ', () => {
  beforeAll(() => console.log('1 - beforeAll'))
  afterAll(() => console.log('1 - afterAll'))
  beforeEach(() => console.log('1 - beforeEach'))
  afterEach(() => console.log('1 - afterEach'))
  test('', () => console.log('1 - test'))
  describe('2.Scoped / Nested block', () => {
    beforeAll(() => console.log('2 - beforeAll'))
    afterAll(() => console.log('2 - afterAll'))
    beforeEach(() => console.log('2 - beforeEach'))
    afterEach(() => console.log('2 - afterEach'))
    test('', () => console.log('2 - test'))
    describe('3.Scoped / Nested block', () => {
      beforeAll(() => console.log('3 - beforeAll'))
      afterAll(() => console.log('3 - afterAll'))
      beforeEach(() => console.log('3 - beforeEach'))
      afterEach(() => console.log('3 - afterEach'))
      test('', () => console.log('3 - test'))
      require('./level2/test.section')(1)

      describe('4. Scoped / Nested block', () => {
        beforeAll(() => console.log('4 - beforeAll'))
        afterAll(() => console.log('4 - afterAll'))
        beforeEach(() => console.log('4 - beforeEach'))
        afterEach(() => console.log('4 - afterEach'))
        test('', () => console.log('4 - test'))
      })
    })
    describe('5.Scoped / Nested block', () => {
      beforeAll(() => console.log('5 - beforeAll'))
      afterAll(() => console.log('5 - afterAll'))
      beforeEach(() => console.log('5 - beforeEach'))
      afterEach(() => console.log('5 - afterEach'))
      test('', () => console.log('5 - test'))
    })
  })

  describe('6.Scoped / Nested block', () => {
    beforeAll(() => console.log('6 - beforeAll'))
    afterAll(() => console.log('6 - afterAll'))
    beforeEach(() => console.log('6 - beforeEach'))
    afterEach(() => console.log('6 - afterEach'))
    test('', () => console.log('6 - test'))
  })
})

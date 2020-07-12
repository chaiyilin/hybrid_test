//import specSection from './demo.spec.section'

// this is the play ground to demo the scoping and Order of execution
// enhance the code from https://jestjs.io/docs/en/setup-teardown
describe('level 1. the whole ', () => {
  beforeAll(() => console.log('1 - beforeAll'))
  afterAll(() => console.log('1 - afterAll'))
  beforeEach(() => console.log('1 - beforeEach'))
  afterEach(() => console.log('1 - afterEach'))
  test('', () => console.log('level 1 - test'))
  require('./level2/test.section')(2)
})

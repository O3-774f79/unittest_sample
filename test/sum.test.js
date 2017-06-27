const expect = require('chai').expect
const Calculater = require('../src/sum')

describe('test class calculater ', () => {
  let calculate
  before(() => {
    // before คือ เราจะทำ function นี่ก่อนทำ Test case ครั้งแรกครั้งเดียว
    console.log('ok')
  })
  beforeEach(() => {
    // beforeEach ทุก Test case เราจะเข้า function นี้ก่อนเสมอ
    calculate = new Calculater()
  })
  afterEach(() => {
    // afterEach เมื่อจบ Test case แต่ละ Test case เราจะทำ function นี้
    console.log('wait')
  })
  after(() => {
    // after เมื่อจบทุก Test case ถึงจะทำ function นี้
    console.log('sucress')
  })
  /*
  3A ประกอบด้วย 
  A = Arrange
  A = Act
  A = Assert
   */
  it('if value1=10 value2=5 total=15', () => {
    //arrange
    const value1 = 10
    const value2 = 5
    //act
    const total = calculate.sum(value1, value2)
    //assert
    expect(15).to.be.equal(total)
  })
})

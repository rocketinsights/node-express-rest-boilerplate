const { expect } = require('chai')
const serviceUnderTest = require('../../../src/services/replacemeService')

describe('The replacemeService', () => {
  beforeEach('before the service is used', () => {
    // FIXME remove this or use it
    console.log('do stuff in before')
  })

  context('The getModelItems function', () => {
    it('Returns all model items', async () => {
      const items = await serviceUnderTest.getModelItems()
      return expect(items.length).to.equal(3)
    })
  })
})

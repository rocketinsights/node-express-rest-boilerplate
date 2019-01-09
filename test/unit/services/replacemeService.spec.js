const { expect } = require('chai')
const proxyquire = require('proxyquire')
const sinon = require('sinon')
const _ = require('lodash')
let dbStub
let serviceUnderTest

describe('The replacemeService', () => {
  before('stub the query methods', () => {
    // FIXME remove this or use it
    /* Yes, it's silly to stub out a database like this, but want to keep
    an example of stubbing/mocking in here for later use to isolate any
    logic in a service layer that might actually be useful to unit test */
    dbStub = {
      models: {
        employee: { findAll: _.constant([]) }
      },
      '@noCallThru': true
    }

    serviceUnderTest = proxyquire('../../../src/services/replacemeService', {
      '../db/index': dbStub,
      '@noCallThru': true
    })
  })

  context('The getModelItems function', () => {
    before('before the get all model items function', () => {
      sinon.stub(dbStub.models.employee, 'findAll').returns(Promise.resolve([]))
    })

    it('Returns all model items', async () => {
      const items = await serviceUnderTest.getModelItems()
      return expect(items.length).to.equal(0)
    })
  })
})

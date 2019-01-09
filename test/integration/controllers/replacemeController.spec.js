const app = require('../../../src/server.js')
const request = require('supertest')
const { expect } = require('chai')

describe('GET /replaceme', () => {
  it('responds with users', () => {
    return request(app)
      .get('/replaceme')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        return expect(response.body.length).to.equal(3)
      })
  })
})

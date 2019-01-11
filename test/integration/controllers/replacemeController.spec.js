const app = require('../../../src/server.js')
const request = require('supertest')
const { expect } = require('chai')

describe('GET /replaceme', () => {
  context('The controller', () => {
    it('responds with all users', () => {
      return request(app)
        .get('/replaceme')
        .set('Accept', 'application/json')
        .expect(200)
        .then(response => {
          // expected result comes from seed data in src/db/seeders
          return expect(response.body.length).to.equal(2)
        })
    })
  })
})

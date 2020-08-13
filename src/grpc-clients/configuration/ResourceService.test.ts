import { expect } from 'chai'
import { createClient } from './ResourceService'

describe('ResourceService', () => {
  it('Should create client object', () => {
    expect(createClient()).not.to.equal(null)
  })
})

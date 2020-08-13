import { expect } from 'chai'
import { createClient } from './GeoipService'

describe('GeoipService', () => {
  it('Should create client object', () => {
    expect(createClient()).not.to.equal(null)
  })
})

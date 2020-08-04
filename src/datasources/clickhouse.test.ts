import { expect } from 'chai'
import clickhouse from './clickhouse'

describe('Clickhouse driver', () => {
  it('Driver object not null', () => {
    expect(clickhouse).not.be.equal(null)
  })
})

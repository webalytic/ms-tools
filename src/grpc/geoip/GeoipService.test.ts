import { expect } from 'chai'
import { Server } from 'grpc'
import { createClient, createServer, createMock } from './GeoipService'
import { Geoip as GeoipService } from '../../../shared/geoip/geoip'
import { createMockImplements } from '../baseFactories'

const mockRules = [
  { method: 'LookUp', request: {}, response: {} }
]

describe('GeoipService', () => {
  it('Should create server, instanceOf Server', () => {
    const server = createServer(createMockImplements(mockRules))
    expect(server).not.to.equal(null)
    expect(server).instanceOf(Server)
  })

  it('Should create client, instanceOf GeoipService', () => {
    const client = createClient()
    expect(client).not.to.equal(null)
    expect(client).instanceOf(GeoipService)
  })

  it('Should create mock server', () => {
    expect(createMock(mockRules)).not.to.equal(null)
  })
})

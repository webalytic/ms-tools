import { expect } from 'chai'
import { Server, ServerCredentials } from 'grpc'
import {
  createClient, createServer, createMock, getAddresInfo
} from './GeoipService'
import { Geoip as GeoipService } from '../../../shared/geoip/geoip'
import { MockRule } from '../baseFactories'
import GeoipServiceMock from './GeoipServiceMock'

const mockRules: MockRule[] = [
  {
    method: 'LookUp',
    cases: [
      { request: {}, response: {} },
      { request: { ip: 'test' }, response: { city: 'test', country: 'test' } }
    ]
  }
]

let mockServer: Server

describe('GeoipService', () => {
  before(() => {
    mockServer = createMock(mockRules)
    // Todo: find free port and use it
    const addressInfo = getAddresInfo()
    mockServer.bind(
      `${addressInfo.address}:${addressInfo.port}`,
      ServerCredentials.createInsecure()
    )
    mockServer.start()
  })

  after((done) => {
    mockServer.tryShutdown(() => {
      done()
    })
  })

  it('Should create server, instanceOf Server', () => {
    const server = createServer(new GeoipServiceMock(mockRules))
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

  // Todo: move to integration test
  it('Should make valid mock request', async () => {
    const client = createClient()

    const res = await client.lookUp({ ip: 'test' })

    expect(res.country).to.be.equal('test')
    expect(res.city).to.be.equal('test')
  })
})

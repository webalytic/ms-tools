import { expect } from 'chai'
import { Server, ServerCredentials } from 'grpc'
import {
  createClient, createServer, createMock, getAddresInfo
} from './ResourceService'
import { ResourceService } from '../../../shared/configuration/resource_service'
import { MockRule } from '../baseFactories'
import ResourceServiceMock from './ResourceServiceMock'

const mockRules: MockRule[] = [
  {
    method: 'ListResources',
    cases: [{ request: {}, response: {} }]
  },
  {
    method: 'CreateResource',
    cases: [{ request: { data: { name: 'test' } }, response: { instance: { name: 'test' } } }]
  },
  {
    method: 'UpdateResource',
    cases: [{ request: {}, response: {} }]
  }
]

let mockServer: Server

describe('ResourceService', () => {
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
    const server = createServer(new ResourceServiceMock(mockRules))
    expect(server).not.to.equal(null)
    expect(server).instanceOf(Server)
  })

  it('Should create client, instanceOf ResourceService', () => {
    const client = createClient()
    expect(client).not.to.equal(null)
    expect(client).instanceOf(ResourceService)
  })

  it('Should create mock server', () => {
    expect(createMock(mockRules)).not.to.equal(null)
  })

  // Todo: move to integration test
  it('Should make valid mock request', async () => {
    const client = createClient()

    const res = await client.createResource({
      data: {
        name: 'test'
      }
    })

    expect(res.instance?.name).to.be.equal('test')
    expect(res.instance?.name).to.be.equal('test')
  })
})

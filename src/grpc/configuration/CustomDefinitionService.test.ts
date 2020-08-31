import { expect } from 'chai'
import { Server, ServerCredentials } from 'grpc'
import {
  createClient, createServer, createMock, getAddresInfo
} from './CustomDefinitionService'
import { CustomDefinitionService } from '../../../shared/configuration/custom_definition_service'
import { MockRule } from '../baseFactories'
import CustomDefinitionServiceMock from './CustomDefinitionServiceMock'

const mockRules: MockRule[] = [
  {
    method: 'ListCustomDefinitions',
    cases: [{ request: {}, response: {} }]
  },
  {
    method: 'CreateCustomDefinition',
    cases: [{ request: { data: { name: 'test' } }, response: { instance: { name: 'test' } } }]
  },
  {
    method: 'UpdateCustomDefinition',
    cases: [{ request: {}, response: {} }]
  }
]

let mockServer: Server

describe('CustomDefinitionService', () => {
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
    const server = createServer(new CustomDefinitionServiceMock(mockRules))
    expect(server).not.to.equal(null)
    expect(server).instanceOf(Server)
  })

  it('Should create client, instanceOf CustomDefinitionService', () => {
    const client = createClient()
    expect(client).not.to.equal(null)
    expect(client).instanceOf(CustomDefinitionService)
  })

  it('Should create mock server', () => {
    expect(createMock(mockRules)).not.to.equal(null)
  })

  // Todo: move to integration test
  it('Should make valid mock request', async () => {
    const client = createClient()

    const res = await client.createCustomDefinition({
      data: {
        name: 'test'
      }
    })

    expect(res.instance?.name).to.be.equal('test')
    expect(res.instance?.name).to.be.equal('test')
  })
})

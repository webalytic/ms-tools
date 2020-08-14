import { expect } from 'chai'
import { Server } from 'grpc'
import { createClient, createServer, createMock } from './ResourceService'
import { ResourceService } from '../../../shared/configuration/resource_service'
import { createMockImplements } from '../baseFactories'

const mockRules = [
  { method: 'ListResources', request: {}, response: {} },
  { method: 'CreateResource', request: {}, response: {} },
  { method: 'UpdateResource', request: {}, response: {} }
]

describe('ResourceService', () => {
  it('Should create server, instanceOf Server', () => {
    const server = createServer(createMockImplements(mockRules))
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
})

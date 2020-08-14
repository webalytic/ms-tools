import { Server } from 'grpc'
import { AddressInfo } from 'net'

import {
  createServerBase,
  createClientBase,
  createMockImplements,
  MockRule
} from '../baseFactories'

import { ResourceService } from '../../../shared/configuration/resource_service'

const PROTO_PATHS = [
  `${__dirname}/../../../shared/configuration/resource.proto`,
  `${__dirname}/../../../shared/configuration/resource_service.proto`
]

const SERVICE_NAME = 'ResourceService'

export function getAddresInfo(): AddressInfo {
  const port = +(process.env.CONFIGURATION_PORT || 50051)
  const address = process.env.CONFIGURATION_HOST || '0.0.0.0'

  return {
    port,
    address,
    family: 'IPv4'
  }
}

export function createServer(implementation: any): Server {
  return createServerBase(implementation, PROTO_PATHS, SERVICE_NAME)
}

export function createClient(): ResourceService {
  return createClientBase<ResourceService>(
    ResourceService,
    SERVICE_NAME,
    getAddresInfo(),
    PROTO_PATHS
  )
}

export function createMock(rules: MockRule[] = []): Server {
  const implementation = createMockImplements(rules)
  return createServer(implementation)
}

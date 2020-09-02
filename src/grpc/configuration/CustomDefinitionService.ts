import { Server } from 'grpc'
import { AddressInfo } from 'net'

import {
  createServerBase,
  createClientBase,
  createServiceBase,
  MockRule
} from '../baseFactories'

import { CustomDefinitionService } from '../../../shared/configuration/custom_definition_service'
import CustomDefinitionServiceMock from './CustomDefinitionServiceMock'

const PROTO_PATHS = [
  `${__dirname}/../../../shared/configuration/custom_definition.proto`,
  `${__dirname}/../../../shared/configuration/custom_definition_service.proto`
]

const SERVICE_NAME = 'CustomDefinitionService'

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

export function createService(): any {
  return createServiceBase(PROTO_PATHS, SERVICE_NAME)
}

export function createClient(): CustomDefinitionService {
  return createClientBase<CustomDefinitionService>(
    CustomDefinitionService,
    SERVICE_NAME,
    getAddresInfo(),
    PROTO_PATHS
  )
}

export function createMock(rules: MockRule[] = []): Server {
  const implementation = new CustomDefinitionServiceMock(rules)
  return createServer(implementation)
}

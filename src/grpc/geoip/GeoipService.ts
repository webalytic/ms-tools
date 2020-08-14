import {
  Server
} from 'grpc'

import { AddressInfo } from 'net'
import {
  createServerBase,
  createClientBase,
  createMockImplements,
  MockRule
} from '../baseFactories'

import { Geoip as GeoipService } from '../../../shared/geoip/geoip'

const PROTO_PATHS = [
  `${__dirname}/../../../shared/geoip/geoip.proto`
]
const SERVICE_NAME = 'Geoip'

export function getAddresInfo(): AddressInfo {
  const port = +(process.env.GEOIP_PORT || 50051)
  const address = process.env.GEOIP_HOST || '0.0.0.0'

  return {
    port,
    address,
    family: 'IPv4'
  }
}

export function createServer(implementation: any): Server {
  return createServerBase(implementation, PROTO_PATHS, SERVICE_NAME)
}

export function createClient(): GeoipService {
  return createClientBase<GeoipService>(
    GeoipService,
    SERVICE_NAME,
    getAddresInfo(),
    PROTO_PATHS
  )
}

export function createMock(rules: MockRule[] = []): Server {
  const implementation = createMockImplements(rules)
  return createServer(implementation)
}

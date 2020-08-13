// Todo: create common factory for all clients
import { credentials, loadPackageDefinition, Client } from 'grpc'
import * as protoLoader from '@grpc/proto-loader'

import { Geoip as GeoipService } from '../../../shared/geoip/geoip'

const packageDefinition = protoLoader.loadSync([
  `${__dirname}/../../../shared/geoip/geoip.proto`
])

const port = +(process.env.GEOIP_PORT || 50051)
const host = process.env.GEOIP_HOST || '0.0.0.0'
const address = `${host}:${port}`

const protoDescriptor: any = loadPackageDefinition(packageDefinition)

export default (): GeoipService => {
  const client: Client = new protoDescriptor.Geoip(address, credentials.createInsecure())

  const rpcImpl = (method, requestData, callback) => {
    client.makeUnaryRequest(
      `/Geoip/${method.name}`,
      (arg) =>
        arg,
      (arg) =>
        arg,
      requestData,
      null,
      {},
      callback
    )
  }

  return GeoipService.create(rpcImpl, false, false)
}

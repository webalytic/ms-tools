// Todo: create common factory for all clients
import { credentials, loadPackageDefinition, Client } from 'grpc'
import * as protoLoader from '@grpc/proto-loader'

import { ResourceService } from '@shared/configuration/resource_service'

const packageDefinition = protoLoader.loadSync([
  `${__dirname}/../../../shared/configuration/resource.proto`,
  `${__dirname}/../../../shared/configuration/resource_service.proto`
])

const port = +(process.env.CONFIGURATION_PORT || 50051)
const host = process.env.CONFIGURATION_HOST || '0.0.0.0'
const address = `${host}:${port}`

const protoDescriptor: any = loadPackageDefinition(packageDefinition)

export default (): ResourceService => {
  const client: Client = new protoDescriptor.ResourceService(address, credentials.createInsecure())

  const rpcImpl = (method, requestData, callback) => {
    client.makeUnaryRequest(
      `/ResourceService/${method.name}`,
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

  return ResourceService.create(rpcImpl, false, false)
}

// Todo: create common factory for all clients
import {
  credentials, loadPackageDefinition, Client, Server
} from 'grpc'
import * as protoLoader from '@grpc/proto-loader'
import { AddressInfo } from 'net'

import { Geoip as GeoipService } from '../../../shared/geoip/geoip'

export function getAddresInfo(): AddressInfo {
  const port = +(process.env.GEOIP_PORT || 50051)
  const address = process.env.GEOIP_HOST || '0.0.0.0'

  return {
    port,
    address,
    family: 'IPv4'
  }
}

function getProtoDescriptor(): any {
  const packageDefinition = protoLoader.loadSync([
    `${__dirname}/../../../shared/geoip/geoip.proto`
  ])

  return loadPackageDefinition(packageDefinition)
}

export function createServer(implementation: any): Server {
  const protoDescriptor: any = getProtoDescriptor()

  const server: Server = new Server({
    'grpc.max_receive_message_length': -1,
    'grpc.max_send_message_length': -1
  })

  server.addService(
    protoDescriptor.Geoip.service,
    implementation
  )

  return server
}

export function createClient(): GeoipService {
  const protoDescriptor: any = getProtoDescriptor()

  const addresInfo = getAddresInfo()
  const client: Client = new protoDescriptor.Geoip(
    `${addresInfo.address}:${addresInfo.port}`,
    credentials.createInsecure()
  )

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

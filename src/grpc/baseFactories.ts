/* eslint-disable import/prefer-default-export */
import * as protoLoader from '@grpc/proto-loader'
import {
  credentials, loadPackageDefinition, Client, Server
} from 'grpc'

import { AddressInfo } from 'net'

function getProtoDescriptor(paths: string[]): any {
  const packageDefinition = protoLoader.loadSync(paths)

  return loadPackageDefinition(packageDefinition)
}

export function createServerBase(implementation: any, paths: string[], serviceName: string): Server {
  const protoDescriptor: any = getProtoDescriptor(paths)

  const server: Server = new Server({
    'grpc.max_receive_message_length': -1,
    'grpc.max_send_message_length': -1
  })

  server.addService(
    protoDescriptor[serviceName].service,
    implementation
  )

  return server
}

export function createClientBase<T>(
  serviceStatic: any,
  serviceName: string,
  addresInfo: AddressInfo,
  paths: string[]
) : T {
  const protoDescriptor: any = getProtoDescriptor(paths)

  const client: Client = new protoDescriptor[serviceName](
    `${addresInfo.address}:${addresInfo.port}`,
    credentials.createInsecure()
  )

  const rpcImpl = (method, requestData, callback) => {
    client.makeUnaryRequest(
      `/${serviceName}/${method.name}`,
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

  return serviceStatic.create(rpcImpl, false, false)
}

interface MockRuleCase {
  request: any
  response: any
}
export interface MockRule {
  method: string
  cases: MockRuleCase[]
}

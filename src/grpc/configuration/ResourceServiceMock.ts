// Todo: create (generate ?) common class for mocks services

import { ServerUnaryCall } from 'grpc'
import {
  ResourceService,
  ListResourcesRequest,
  ListResourcesResponse,
  CreateResourceRequest,
  CreateResourceResponse,
  UpdateResourceRequest,
  UpdateResourceResponse
} from '../../../shared/configuration/resource_service'
import { MockRule } from '../baseFactories'

type CreateResourceCall = ServerUnaryCall<CreateResourceRequest>
type CreateResourceCallback = ResourceService.CreateResourceCallback

type ListResourcesCall = ServerUnaryCall<ListResourcesRequest>
type ListResourcesCallback = ResourceService.ListResourcesCallback

type UpdateResourceCall = ServerUnaryCall<UpdateResourceRequest>
type UpdateResourceCallback = ResourceService.UpdateResourceCallback

export default class {
  private rules: MockRule[]

  constructor(rules: MockRule[]) {
    this.rules = rules
  }

  private findCaseForCurrentRequest(method: string, request: any) {
    const rule = this.rules.find((r) =>
      r.method === method)

    return rule?.cases.find((c) =>
      JSON.stringify(c.request) === JSON.stringify(request))
  }

  public async ListResources(
    call: ListResourcesCall,
    callback: ListResourcesCallback
  ): Promise<void> {
    const caseForCurrentRequest = this.findCaseForCurrentRequest('ListResources', call.request)
    callback(null, new ListResourcesResponse(caseForCurrentRequest?.response))
  }

  async CreateResource(call: CreateResourceCall, callback: CreateResourceCallback): Promise<void> {
    const caseForCurrentRequest = this.findCaseForCurrentRequest('CreateResource', call.request)
    callback(null, new CreateResourceResponse(caseForCurrentRequest?.response))
  }

  async UpdateResource(
    call: UpdateResourceCall,
    callback: UpdateResourceCallback
  ): Promise<void> {
    const caseForCurrentRequest = this.findCaseForCurrentRequest('UpdateResource', call.request)
    callback(null, new UpdateResourceResponse(caseForCurrentRequest?.response))
  }
}

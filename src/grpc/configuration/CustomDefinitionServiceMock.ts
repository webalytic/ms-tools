// Todo: create (generate ?) common class for mocks services

import { ServerUnaryCall } from 'grpc'
import {
  CustomDefinitionService,
  ListCustomDefinitionsRequest,
  ListCustomDefinitionsResponse,
  CreateCustomDefinitionRequest,
  CreateCustomDefinitionResponse,
  UpdateCustomDefinitionRequest,
  UpdateCustomDefinitionResponse
} from '../../../shared/configuration/custom_definition_service'
import { MockRule } from '../baseFactories'

type CreateCustomDefinitionCall = ServerUnaryCall<CreateCustomDefinitionRequest>
type CreateCustomDefinitionCallback = CustomDefinitionService.CreateCustomDefinitionCallback

type ListCustomDefinitionsCall = ServerUnaryCall<ListCustomDefinitionsRequest>
type ListCustomDefinitionsCallback = CustomDefinitionService.ListCustomDefinitionsCallback

type UpdateCustomDefinitionCall = ServerUnaryCall<UpdateCustomDefinitionRequest>
type UpdateCustomDefinitionCallback = CustomDefinitionService.UpdateCustomDefinitionCallback

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

  public async ListCustomDefinitions(
    call: ListCustomDefinitionsCall,
    callback: ListCustomDefinitionsCallback
  ): Promise<void> {
    const caseForCurrentRequest = this.findCaseForCurrentRequest('ListCustomDefinitions', call.request)
    callback(null, new ListCustomDefinitionsResponse(caseForCurrentRequest?.response))
  }

  async CreateCustomDefinition(
    call: CreateCustomDefinitionCall,
    callback: CreateCustomDefinitionCallback
  ): Promise<void> {
    const caseForCurrentRequest = this.findCaseForCurrentRequest('CreateCustomDefinition', call.request)
    callback(null, new CreateCustomDefinitionResponse(caseForCurrentRequest?.response))
  }

  async UpdateCustomDefinition(
    call: UpdateCustomDefinitionCall,
    callback: UpdateCustomDefinitionCallback
  ): Promise<void> {
    const caseForCurrentRequest = this.findCaseForCurrentRequest('UpdateCustomDefinition', call.request)
    callback(null, new UpdateCustomDefinitionResponse(caseForCurrentRequest?.response))
  }
}

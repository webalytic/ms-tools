// Todo: create (generate ?) common class for mocks services

import { ServerUnaryCall } from 'grpc'
import {
  Geoip as GeoipService,
  LookUpRequest,
  LookUpResponse
} from '../../../shared/geoip/geoip'
import { MockRule } from '../baseFactories'

type LookUpCall = ServerUnaryCall<LookUpRequest>
type LookUpCallback = GeoipService.LookUpCallback

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

  public async LookUp(
    call: LookUpCall,
    callback: LookUpCallback
  ): Promise<void> {
    const caseForCurrentRequest = this.findCaseForCurrentRequest('LookUp', call.request)
    callback(null, new LookUpResponse(caseForCurrentRequest?.response))
  }
}

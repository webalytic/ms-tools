/* eslint-disable max-classes-per-file */

import { ValidationError as ValidationErrorFastest } from 'fastest-validator'
import { error } from '../../shared/value-objects/error'

export class ValidationError extends error.Error {
  constructor(details: any) {
    super({
      code: 400,
      status: error.Code.INVALID_ARGUMENT,
      message: 'ValidationError',
      details
    })
  }
}

export function createFastesValidationError(errors: ValidationErrorFastest[]): ValidationError {
  return new ValidationError(errors.map((err) =>
    ({
      type: err.type,
      field: err.field,
      message: err.message || ''
    })))
}

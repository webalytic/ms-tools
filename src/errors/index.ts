/* eslint-disable max-classes-per-file */
import { ValidationError as ValidationErrorFastest } from 'fastest-validator'

export class UnauthorizedError extends Error {
  status: number

  constructor() {
    super('Unauthorized')
    this.status = 401
  }
}

export class ForbiddenError extends Error {
  status: number

  constructor() {
    super('Forbidden')
    this.status = 403
  }
}

export class InternalServerError extends Error {
  status: number

  constructor() {
    super('InternalServer')
    this.status = 500
  }
}

export class NotFoundError extends Error {
  status: number

  constructor() {
    super('NotFound')
    this.status = 404
  }
}

export class BadRequestError extends Error {
  status: number

  constructor(msg: string) {
    super(msg)
    this.status = 400
  }
}

interface ValidationErrorExtension {
  type: string
  field: string
  message: string
}

export class ValidationError extends Error {
  status: number

  extensions: any

  constructor(extensions: ValidationErrorExtension[]) {
    super('ValidationError')
    this.extensions = extensions
    this.status = 422
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

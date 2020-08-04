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

export class ValidationError extends Error {
  status: number
  extensions: any
  constructor(extensions: any) {
    super('ValidationError')
    this.extensions = extensions
    this.status = 422
  }
}

export function createJoiValidationError(err: any) {
  if (!err.isJoi) throw new Error('Incorrect error type for createJoiValidationError')

  const extensions = err.details.reduce((obj: any, item: any) => {
    const field = item.path.length > 0 ? item.path.join('.') : item.context.label
    obj[field] = item.type.split('.').pop()
    return obj
  }, {})

  return new ValidationError(extensions)
}

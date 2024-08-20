import { HttpStatusCode } from "axios"

export class AMAKError extends Error {
  public code?: HttpStatusCode
  public date: Date

  constructor(code?: HttpStatusCode, ...params: any) {
    super(...params)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AMAKError)
    }
    this.code = code
    this.date = new Date()
  }
}

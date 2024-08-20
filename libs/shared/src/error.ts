import { HttpStatusCode } from "axios"

export class AppError extends Error {
  status: HttpStatusCode

  constructor(message: any, status: HttpStatusCode = 500) {
    super(message)
    this.status = status
  }
}

import { AMAKNextFunction, AMAKRequest, AMAKResponse } from "../type"
import { AMAKError, log } from "@amak/shared"

export function errorHandler(
  err: AMAKError,
  req: AMAKRequest,
  res: AMAKResponse,
  next: AMAKNextFunction,
) {
  log.error(`[${err.code}] ${err.message}`)

  const statusCode = err.code || 500
  const errObj = {
    code: statusCode,
    message: err.message,
    timestamp: err.date || new Date().toISOString(),
  }

  res.status(statusCode).json(errObj)
}

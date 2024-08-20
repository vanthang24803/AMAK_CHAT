import type { Application, NextFunction, Request, Response } from "express"

export type AMAKRequest = Request
export type AMAKNextFunction = NextFunction
export type AMAKResponse = Response
export type AMAK = Application

export type AMAKRequestHandler = (
  req: AMAKRequest,
  res: AMAKResponse,
  next: AMAKNextFunction,
) => Promise<void> | void

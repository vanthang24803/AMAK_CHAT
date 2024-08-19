export class AppError extends Error {
  status: number

  constructor(message: any, status: number = 500) {
    super(message)
    this.status = status
  }
}

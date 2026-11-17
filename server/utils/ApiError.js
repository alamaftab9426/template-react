export default class ApiError extends Error {
  constructor(statusCode = 500, message = 'Server Error') {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}

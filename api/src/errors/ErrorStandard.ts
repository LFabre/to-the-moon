export class ErrorStandard extends Error {
  public errorCode: string;

  public statusCode: number;

  public details: object;

  public timestamp: string;

  public originalError?: any;

  constructor(
    errorCode: string,
    message: string,
    statusCode: number,
    details?: object,
    originalError?: Error,
  ) {
    super(message);

    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.details = details || {};
    this.timestamp = new Date().toISOString();
    this.originalError = originalError;
  }
}

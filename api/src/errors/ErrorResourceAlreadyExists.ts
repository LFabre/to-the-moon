import { ErrorStandard } from './ErrorStandard';

export class ErrorResourceAlreadyExists extends ErrorStandard {
  constructor(message: string, details: object) {
    super('RESOURCE_ALREADY_EXISTS', message, 429, details);
  }
}

import { ErrorHandler } from '@angular/core';

export class MyErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    // Handle errors here
    console.error('Custom Error Handler:', error);
  }
}
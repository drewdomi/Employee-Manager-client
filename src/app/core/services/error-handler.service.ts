import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  private readonly errorHandlers: {
    [key: number]: (response: HttpErrorResponse) => void;
  };

  constructor() {
    this.errorHandlers = {
      422: (_res: HttpErrorResponse) => {},
      409: (_res: HttpErrorResponse) => {},
      404: (_res: HttpErrorResponse) => {
        localStorage.clear();
        location.reload();
      },
      403: (_res: HttpErrorResponse) => {
        localStorage.clear();
        location.reload();
      },
      401: (_res: HttpErrorResponse) => {},
      0: (_res: HttpErrorResponse) => {
        localStorage.clear();
        location.reload();
      },
    };
  }

  public handleError(response: HttpErrorResponse) {
    const handler = this.errorHandlers[response.status];

    if (handler) handler(response);

    return throwError(() => new Error());
  }
}

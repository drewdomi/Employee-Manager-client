import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  private readonly toastr = inject(ToastrService);

  private readonly errorHandlers: {
    [key: number]: (response: HttpErrorResponse) => void;
  };

  constructor() {
    this.errorHandlers = {
      422: (_res: HttpErrorResponse) => {},
      409: (_res: HttpErrorResponse) => {},
      404: (_res: HttpErrorResponse) => {},
      403: (_res: HttpErrorResponse) => {
        localStorage.clear();
        location.reload();
      },
      401: (_res: HttpErrorResponse) => {
        this.toastr.error('Erro', 'Credenciais inválidas');
      },
      0: (_res: HttpErrorResponse) => {},
    };
  }

  public handleError(response: HttpErrorResponse) {
    const handler = this.errorHandlers[response.status];

    if (handler) handler(response);

    return throwError(() => new Error());
  }
}

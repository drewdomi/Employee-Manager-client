import type { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { ErrorHandlerService } from '../services/error-handler.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const errorHandlerService = inject(ErrorHandlerService);

  req = req.clone({
    withCredentials: true,
  });
  return next(req).pipe(
    catchError((error) => errorHandlerService.handleError(error))
  );
};

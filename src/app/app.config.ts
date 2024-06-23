import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { provideToastr } from 'ngx-toastr';
import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(APP_ROUTES),
    provideHttpClient(),
    provideEnvironmentNgxMask(),
    provideAnimations(),
    provideToastr({
      timeOut: 10000,
      preventDuplicates: true,
      tapToDismiss: true,
      progressBar: true,
      closeButton: true,
    }),
  ],
};

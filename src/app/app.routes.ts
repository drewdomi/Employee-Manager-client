import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/pages/employee/employee.routes').then(
        (r) => r.EMPLOYEE_ROUTES
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

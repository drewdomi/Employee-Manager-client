import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layouts/layout/layout.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./core/pages/employee/employee.routes').then(
            (r) => r.EMPLOYEE_ROUTES
          ),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

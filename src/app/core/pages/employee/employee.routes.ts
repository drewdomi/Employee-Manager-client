import { Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeComponent } from './employee.component';

export const EMPLOYEE_ROUTES: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'create', component: CreateEmployeeComponent },
];

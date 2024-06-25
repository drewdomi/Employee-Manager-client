import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { injectQuery } from '@ngneat/query';
import { environment } from '../../../environments/environment.development';
import { CreateEmployee, Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private http = inject(HttpClient);
  private query = injectQuery();

  findAll() {
    return this.query({
      queryKey: ['employees'] as const,
      queryFn: () => {
        return this.http.get<Employee[]>(`${environment.API_URL}/employee`);
      },
    }).result;
  }

  create(createEmployee: CreateEmployee) {
    return this.http.post(`${environment.API_URL}/employee`, createEmployee);
  }
}

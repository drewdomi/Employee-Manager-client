import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { CreateEmployee, Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Employee[]>(`${environment.API_URL}/employee`);
  }

  create(createEmployee: CreateEmployee) {
    return this.http.post(`${environment.API_URL}/employee`, createEmployee);
  }
}

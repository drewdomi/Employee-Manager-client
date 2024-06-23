import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { CpfFormatPipe } from '../../utils/cpfFormat.pipe';

@Component({
  standalone: true,
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  imports: [CommonModule, RouterModule, CpfFormatPipe],
})
export class EmployeeComponent {
  constructor(private employeeService: EmployeeService) {}

  readonly employees$ = this.employeeService.findAll();
}

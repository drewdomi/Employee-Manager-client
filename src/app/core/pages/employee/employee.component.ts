import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { EmployeeService } from '../../services/employee.service';
import { CpfFormatPipe } from '../../utils/cpfFormat.pipe';

@Component({
  standalone: true,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  imports: [CommonModule, RouterModule, CpfFormatPipe],
})
export class EmployeeComponent {
  private employeeService = inject(EmployeeService);
  private authService = inject(AuthService);
  private router = inject(Router);

  readonly employees$ = this.employeeService.findAll();

  logout() {
    this.authService.logout();
  }
}

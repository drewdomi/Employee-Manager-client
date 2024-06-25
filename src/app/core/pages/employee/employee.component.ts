import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { AuthService } from '../../services/auth.service';
import { EmployeeService } from '../../services/employee.service';
import { CpfFormatPipe } from '../../utils/cpfFormat.pipe';

@Component({
  standalone: true,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  imports: [CommonModule, RouterModule, CpfFormatPipe, NgIconComponent],
})
export class EmployeeComponent {
  private employeeService = inject(EmployeeService);
  private authService = inject(AuthService);

  readonly employees = this.employeeService.findAll();

  logout() {
    this.authService.logout();
  }
}

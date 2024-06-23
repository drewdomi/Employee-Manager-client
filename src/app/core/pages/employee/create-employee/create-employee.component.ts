import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators as V,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft, heroCheck } from '@ng-icons/heroicons/outline';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { ToastrService } from 'ngx-toastr';
import { CreateEmployee } from '../../../models/employee';
import { EmployeeService } from '../../../services/employee.service';
import { civilStates } from '../../../utils/constands/civil-states';
import { markFormGroupTouched } from '../../../utils/validators/mark-form-group-touched';

@Component({
  standalone: true,
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    RouterModule,
    NgIconComponent,
  ],
  viewProviders: [provideIcons({ heroCheck, heroArrowLeft })],
})
export class CreateEmployeeComponent {
  civilStates = civilStates;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private employeeService: EmployeeService,
    private toastr: ToastrService
  ) {}

  protected createEmployee = this.formBuilder.group({
    name: ['', [V.required, V.minLength(3), V.maxLength(80)]],
    motherName: ['', [V.required, V.minLength(3), V.maxLength(80)]],
    rg: ['', [V.required]],
    cpf: ['', [V.required, V.minLength(11), V.maxLength(11)]],
    birthDate: ['', [V.required]],
    plan: ['', [V.required, V.minLength(4), V.maxLength(10)]],
    civilState: ['', [V.required]],
    admissionDate: ['', [V.required]],
    validityDate: ['', [V.required]],
    registration: ['', [V.required, V.minLength(7), V.maxLength(8)]],
  });

  onSubmit() {
    if (this.createEmployee.invalid)
      return markFormGroupTouched(this.createEmployee);

    this.employeeService
      .create(this.createEmployee.value as CreateEmployee)
      .subscribe({
        next: () => {
          this.toastr.success('Feito', 'Funcionário criado');
          this.createEmployee.reset();
        },
        error: () => {
          this.toastr.error('Erro', 'Erro ao criar funcionário');
        },
      });
  }
}

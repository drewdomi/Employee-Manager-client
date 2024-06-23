import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators as V,
} from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { civilStates } from '../../../utils/constands/civil-states';
import { markFormGroupTouched } from '../../../utils/validators/mark-form-group-touched';

@Component({
  standalone: true,
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss',
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
})
export class CreateEmployeeComponent {
  civilStates = civilStates;

  constructor(private formBuilder: NonNullableFormBuilder) {}

  protected createEmployee = this.formBuilder.group({
    name: ['', [V.required, V.minLength(3), V.maxLength(80)]],
    motherName: ['', [V.required, V.minLength(3), V.maxLength(80)]],
    rg: ['', [V.required]],
    cpf: ['', [V.required]],
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

    console.log(this.createEmployee.controls.plan.value);
  }
}

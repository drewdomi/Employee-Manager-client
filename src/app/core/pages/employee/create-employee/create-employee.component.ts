import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators as V,
} from '@angular/forms';
import { civilStates } from '../../../utils/constands/civil-states';

@Component({
  standalone: true,
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss',
  imports: [CommonModule, ReactiveFormsModule],
})
export class CreateEmployeeComponent {
  civilStates = civilStates;

  constructor(private formBuilder: NonNullableFormBuilder) {}

  protected createEmployee = this.formBuilder.group({
    name: ['', [V.required, V.minLength(3), V.maxLength(80)]],
    motherName: ['', [V.required, V.minLength(3), V.maxLength(80)]],
    cpf: ['', [V.required, V.minLength(11), V.maxLength(11)]],
    birthDate: ['', [V.required]],
    civilState: ['', [V.required]],
    admissionDate: ['', [V.required]],
    validityDate: ['', [V.required]],
    registration: ['', [V.required, V.minLength(7), V.maxLength(8)]],
  });

  onSubmit() {
    console.log(this.createEmployee.value);
  }
}

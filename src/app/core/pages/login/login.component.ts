import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators as V,
} from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, NgIconComponent],
})
export class LoginComponent {
  private formBuilder = inject(NonNullableFormBuilder);

  protected login = this.formBuilder.group({
    code: ['', [V.required, V.minLength(4), V.maxLength(8)]],
    password: ['', V.required, V.minLength(4), V.maxLength(8)],
  });
}

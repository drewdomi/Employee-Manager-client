import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators as V,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { Login } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { markFormGroupTouched } from '../../utils/validators/mark-form-group-touched';

@Component({
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, NgIconComponent],
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  protected login = this.formBuilder.group({
    code: ['', [V.required, V.minLength(4), V.maxLength(8)]],
    password: ['', V.required],
  });

  ngOnInit() {
    if (this.authService.getLogged()) this.router.navigateByUrl('/');
  }

  onLogin() {
    if (this.login.invalid) return markFormGroupTouched(this.login);

    this.authService.login(this.login.value as Login).subscribe();
  }
}

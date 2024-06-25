import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Login } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private logged = false;

  constructor() {
    if (localStorage.getItem('Logged')) this.loginWithToken();
  }

  getLogged() {
    return this.logged;
  }

  loginWithToken() {
    this.logged = true;
  }

  login(login: Login) {
    return this.http.post(`${environment.API_URL}/auth`, login).pipe(
      map(() => {
        localStorage.setItem('Logged', 'true');
        location.reload();
      })
    );
  }

  logout() {
    return this.http.get(`${environment.API_URL}/logout`).subscribe({
      next: () => {
        localStorage.clear();
        location.reload();
      },
    });
  }
}

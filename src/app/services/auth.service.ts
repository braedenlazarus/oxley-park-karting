import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { type Test } from '../login/register.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly localStorageKey = 'users';
  private readonly validEmail = 'admin@gmail.com';
  private readonly validPassword = 'Valid';

  constructor(private router: Router) {}

  private getUsers(): Test {
    const users = localStorage.getItem(this.localStorageKey);
    return users ? JSON.parse(users) : [];
  }

  private saveUsers(users: Test): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  login(email: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (
      (email === this.validEmail && password === this.validPassword) ||
      user
    ) {
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  register(email: string, password: string): void {
    const users = this.getUsers();
    users.push({ email, password });
    this.saveUsers(users);
  }
}

import { Injectable } from '@angular/core';

interface IAuthService {
  login(username: string, password: string): boolean;
  logout(): void;
  isAuthenticated(): boolean;
  getLoggedInUser(): string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('username', username);
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('username');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('username') !== null;
  }

  getLoggedInUser(): string {
    return localStorage.getItem('username') || '';
  }
}

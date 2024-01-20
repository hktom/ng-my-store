import { EventEmitter, Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';

interface IAuthService {
  login(username: string, password: string): void;
  logout(): void;
  isAuthenticated(): boolean;
  getLoggedInUser(): string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements IAuthService {
  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) {}

  authStatusUpdate = new EventEmitter<boolean>();

  login(username: string, password: string): void {
    if (username === 'admin@admin.com' && password === 'admin') {
      localStorage.setItem('username', username);
      this.notificationService.notificationStatusUpdated.emit({
        message: 'You have successfully logged in!',
        category: 'alert-success',
      });
      this.router.navigate(['/']);
      this.authStatusUpdate.emit(true);
      return;
    }
    this.notificationService.notificationStatusUpdated.emit({
      message: 'Invalid username or password!',
      category: 'alert-danger',
    });
  }

  logout(): void {
    this.router.navigate(['/']);
    this.authStatusUpdate.emit(false);
    localStorage.removeItem('username');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('username') !== null;
  }

  getLoggedInUser(): string {
    return localStorage.getItem('username') || '';
  }
}

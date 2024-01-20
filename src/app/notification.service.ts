import { Injectable } from '@angular/core';

interface INotificationService {
  showNotification: (message: string, category: 'error' | 'success') => void;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService implements INotificationService {
  constructor() {}

  showNotification(message: string, category: 'error' | 'success') {
    console.log(message, category);
  }
}

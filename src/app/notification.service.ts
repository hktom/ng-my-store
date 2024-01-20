import { EventEmitter, Injectable } from '@angular/core';

export interface INotification {
  message: string;
  category: 'alert-success' | 'alert-danger';
}

interface INotificationService {
  showNotification: (notification: INotification) => void;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService implements INotificationService {
  constructor() {}

  notificationStatusUpdated = new EventEmitter<INotification>();

  showNotification(notification: INotification) {
    console.log('notification', notification);
  }
}

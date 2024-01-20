import { Component } from '@angular/core';
import { INotification, NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  notifications?: INotification;
  showNotification = false;

  constructor(private notificationService: NotificationService) {
    this.notificationService.notificationStatusUpdated.subscribe(
      (notification) => {
        this.notifications = notification;
        this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    );
  }
}

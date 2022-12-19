import { Notification } from 'src/app/entities/notifications/Notification';

export class NotificationViewModel {
  static toHttp(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      receiver_id: notification.receiver_id,
    };
  }
}

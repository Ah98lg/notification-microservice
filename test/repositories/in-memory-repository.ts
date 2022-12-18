import { Notification } from 'src/app/entities/notifications/Notification';
import { NotificationRepository } from 'src/app/repositories/notification-repostitory';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}

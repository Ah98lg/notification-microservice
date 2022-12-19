import { Notification } from 'src/app/entities/notifications/Notification';
import { NotificationRepository } from 'src/app/repositories/notification-repostitory';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (notification) => notification.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }

  async findById(notification_id: string): Promise<Notification | null> {
    const notification = this.notifications.find((notification) => {
      notification.id === notification_id;
    });

    if (!notification) {
      return null;
    }

    return notification;
  }

  async countManyByReceiverId(receiver_id: string): Promise<number> {
    return this.notifications.filter(
      (notification) => notification.receiver_id === receiver_id,
    ).length;
  }

  async findManyByReceiverId(receiver_id: string): Promise<Notification[]> {
    return this.notifications.filter(
      (notification) => notification.receiver_id === receiver_id,
    );
  }
}

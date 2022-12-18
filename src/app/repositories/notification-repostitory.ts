import { Notification } from '../entities/notifications/Notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
}

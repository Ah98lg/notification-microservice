import { Notification } from '../entities/notifications/Notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notification_id: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByReceiverId(receiver_id: string): Promise<number>;
  abstract findManyByReceiverId(receiver_id: string): Promise<Notification[]>;
}

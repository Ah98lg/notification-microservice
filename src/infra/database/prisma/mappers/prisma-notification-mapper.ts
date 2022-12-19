import { Notification } from 'src/app/entities/notifications/Notification';
import { Notification as RawNotification } from '@prisma/client';
import { NotificationContent } from 'src/app/entities/notifications/NotificationContent';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      receiver_id: notification.receiver_id,
      read_at: notification.read_at,
      created_at: notification.created_at,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new NotificationContent(raw.content),
        receiver_id: raw.receiver_id,
        read_at: raw.read_at,
        canceled_at: raw.canceled_at,
        created_at: raw.created_at,
      },
      raw.id,
    );
  }
}

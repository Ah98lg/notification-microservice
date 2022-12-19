import { NotificationRepository } from '../repositories/notification-repostitory';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found-error';

interface UnreadNotificationRequest {
  notification_id: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<UnreadNotificationResponse> {
    const { notification_id } = request;

    const notification = await this.notificationRepository.findById(
      notification_id,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationRepository.save(notification);
  }
}

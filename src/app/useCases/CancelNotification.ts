import { NotificationRepository } from '../repositories/notification-repostitory';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found-error';

interface CancelNotificationRequest {
  notification_id: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notification_id } = request;

    const notification = await this.notificationRepository.findById(
      notification_id,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationRepository.save(notification);
  }
}

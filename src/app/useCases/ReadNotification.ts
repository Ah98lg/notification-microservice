import { NotificationRepository } from '../repositories/notification-repostitory';
import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from './errors/notification-not-found-error';

interface ReadNotificationRequest {
  notification_id: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notification_id } = request;

    const notification = await this.notificationRepository.findById(
      notification_id,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.notificationRepository.save(notification);
  }
}

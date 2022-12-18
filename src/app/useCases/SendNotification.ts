import { NotificationContent } from '../entities/notifications/NotificationContent';
import { Notification } from '../entities/notifications/Notification';
import { NotificationRepository } from '../repositories/notification-repostitory';
import { Injectable } from '@nestjs/common';

interface SendNotificationRequest {
  receiver_id: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { receiver_id, category, content } = request;

    const notification = new Notification({
      receiver_id,
      category,
      content: new NotificationContent(content),
    });

    await this.notificationRepository.create(notification);

    return { notification };
  }
}

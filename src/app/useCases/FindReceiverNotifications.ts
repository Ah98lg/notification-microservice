import { NotificationRepository } from '../repositories/notification-repostitory';
import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notifications/Notification';

interface FindReceiverNotificationsnRequest {
  receiver_id: string;
}

interface FindReceiverNotificationsnResponse {
  notifications: Notification[];
}

@Injectable()
export class FindReceiverNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: FindReceiverNotificationsnRequest,
  ): Promise<FindReceiverNotificationsnResponse> {
    const { receiver_id } = request;

    const notifications =
      await this.notificationRepository.findManyByReceiverId(receiver_id);

    return { notifications };
  }
}

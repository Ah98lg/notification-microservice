import { NotificationRepository } from '../repositories/notification-repostitory';
import { Injectable } from '@nestjs/common';

interface CountReceiverNotificationsnRequest {
  receiver_id: string;
}

type CountReceiverNotificationsnResponse = number;

@Injectable()
export class CountReceiverNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: CountReceiverNotificationsnRequest,
  ): Promise<CountReceiverNotificationsnResponse> {
    const { receiver_id } = request;

    const notificationCount =
      await this.notificationRepository.countManyByReceiverId(receiver_id);

    return notificationCount;
  }
}

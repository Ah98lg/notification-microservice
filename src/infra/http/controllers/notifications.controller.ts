import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Notification } from 'src/app/entities/notifications/Notification';
import { CancelNotification } from 'src/app/useCases/CancelNotification';
import { CountReceiverNotifications } from 'src/app/useCases/CountReceiverNotifications';
import { FindReceiverNotification } from 'src/app/useCases/FindReceiverNotifications';
import { ReadNotification } from 'src/app/useCases/ReadNotification';
import { SendNotification } from 'src/app/useCases/SendNotification';
import { UnreadNotification } from 'src/app/useCases/UnreadNotification';
import { CreateNotificationsValidation } from '../dtos/create-notifications-validation';
import { NotificationViewModel } from '../mappers/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private countReceiverNotifications: CountReceiverNotifications,
    private cancelNotification: CancelNotification,
    private findReceiverNotifications: FindReceiverNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') notification_id: string) {
    await this.cancelNotification.execute({ notification_id });
  }

  @Get(':id/count')
  async countFromReceiver(
    @Param('id') receiver_id: string,
  ): Promise<{ count: number }> {
    const count = await this.countReceiverNotifications.execute({
      receiver_id,
    });

    return { count };
  }

  @Get(':id/user-notifications')
  async getAllFromReceiver(@Param('id') receiver_id: string) {
    const { notifications } = await this.findReceiverNotifications.execute({
      receiver_id,
    });

    return notifications.map(NotificationViewModel.toHttp);
  }

  @Patch(':id/read')
  async read(@Param('id') notification_id: string) {
    await this.readNotification.execute({ notification_id });
  }

  @Patch(':id/unread')
  async unread(@Param('id') notification_id: string) {
    await this.unreadNotification.execute({ notification_id });
  }

  @Post()
  async createNotification(@Body() body: CreateNotificationsValidation) {
    const { content, category, receiver_id } = body;

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      receiver_id,
    });

    return {
      notification: NotificationViewModel.toHttp(notification),
    };
  }
}

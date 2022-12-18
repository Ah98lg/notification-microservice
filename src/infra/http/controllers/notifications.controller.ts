import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/useCases/SendNotification';
import { CreateNotificationsValidation } from '../dtos/create-notifications-validation';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  @Post()
  async createNotification(@Body() body: CreateNotificationsValidation) {
    const { content, category, receiver_id } = body;

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      receiver_id,
    });

    return {
      notification,
    };
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationsValidation } from './validations/create-notifications-validation';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async createNotification(@Body() body: CreateNotificationsValidation) {
    const { content, category, receiver_id } = body;

    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        receiver_id,
      },
    });
  }

  @Get()
  listNotifications() {
    return this.prismaService.notification.findMany();
  }
}

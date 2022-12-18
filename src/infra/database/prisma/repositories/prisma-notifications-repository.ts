import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notifications/Notification';
import { NotificationRepository } from 'src/app/repositories/notification-repostitory';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        receiver_id: notification.receiver_id,
        read_at: notification.read_at,
        created_at: notification.created_at,
      },
    });
  }
}

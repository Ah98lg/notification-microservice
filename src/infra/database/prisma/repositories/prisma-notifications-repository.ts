import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notifications/Notification';
import { NotificationRepository } from 'src/app/repositories/notification-repostitory';
import { NotificationNotFound } from 'src/app/useCases/errors/notification-not-found-error';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const rawNotification = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: rawNotification,
    });
  }

  async findById(notification_id: string): Promise<Notification | null> {
    const notification = await this.prismaService.notification.findUnique({
      where: {
        id: notification_id,
      },
    });

    if (!notification) {
      throw new NotificationNotFound();
    }

    return PrismaNotificationMapper.toDomain(notification);
  }

  async findManyByReceiverId(receiver_id: string): Promise<Notification[]> {
    const rawReceiverNotifications =
      await this.prismaService.notification.findMany({
        where: {
          receiver_id,
        },
      });

    return rawReceiverNotifications.map((notifications) =>
      PrismaNotificationMapper.toDomain(notifications),
    );
  }

  async countManyByReceiverId(receiver_id: string): Promise<number> {
    const receiverNotificationsQuantity =
      await this.prismaService.notification.count({
        where: {
          receiver_id,
        },
      });

    return receiverNotificationsQuantity;
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.update({
      where: {
        id: notification.id,
      },
      data: raw,
    });
  }
}

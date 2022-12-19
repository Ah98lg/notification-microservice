import { Module } from '@nestjs/common';
import { CancelNotification } from 'src/app/useCases/CancelNotification';
import { CountReceiverNotifications } from 'src/app/useCases/CountReceiverNotifications';
import { FindReceiverNotification } from 'src/app/useCases/FindReceiverNotifications';
import { ReadNotification } from 'src/app/useCases/ReadNotification';
import { SendNotification } from 'src/app/useCases/SendNotification';
import { UnreadNotification } from 'src/app/useCases/UnreadNotification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountReceiverNotifications,
    FindReceiverNotification,
  ],
})
export class HttpModule {}

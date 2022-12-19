import {
  INotification,
  Notification,
} from 'src/app/entities/notifications/Notification';
import { NotificationContent } from 'src/app/entities/notifications/NotificationContent';

type Override = Partial<INotification>;

export function makeNewNotification(override: Override = {}) {
  return new Notification({
    content: new NotificationContent('New notification in bound'),
    category: 'alert',
    receiver_id: 'testReceiver',
    ...override,
  });
}

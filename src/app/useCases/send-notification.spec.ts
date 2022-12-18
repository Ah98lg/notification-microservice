import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-repository';
import { SendNotification } from './SendNotification';

describe('Send notification test suite', () => {
  it('Should send a notification', async () => {
    const InMemoNotificationRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(InMemoNotificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'New notification arived',
      receiver_id: '123123542',
      category: 'alert',
    });

    expect(InMemoNotificationRepository.notifications).toHaveLength(1);
    expect(InMemoNotificationRepository.notifications[0]).toBe(notification);
  });
});

import { NotificationContent } from './NotificationContent';
import { Notification } from './Notification';

describe('Notification test suite', () => {
  it('Should be able to create a notification', () => {
    const notification = new Notification({
      content: new NotificationContent('You have a new notification'),
      category: 'alert',
      receiver_id: '1d3f-d23t-csd2',
    });

    expect(notification).toBeTruthy();
  });
});

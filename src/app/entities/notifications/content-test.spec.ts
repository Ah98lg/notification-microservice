import { NotificationContent } from './NotificationContent';

describe('Notification content test suite', () => {
  // Create
  it('it should be able to create a notification content', () => {
    const content = new NotificationContent(
      'You have a new notification, fella',
    );

    expect(content).toBeTruthy();
  });

  // Less than 5 caracters
  it('It should have more than 5 caracters', () => {
    expect(() => new NotificationContent('No')).toThrowError();
  });

  // More than 280 caracters
  it('It should have less than 280 caracters', () => {
    expect(() => new NotificationContent('N'.repeat(281))).toThrowError();
  });
});

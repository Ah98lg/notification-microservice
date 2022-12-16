import { NotificationContent } from './notification-content';

export interface INotification {
  content: NotificationContent;
  category: string;
  read_at?: Date | null;
  created_at: Date;
  receiver_id: string;
}

export class Notification {
  private props: INotification;

  constructor(props: INotification) {
    this.props = props;
  }

  public get receiver_id(): string {
    return this.props.receiver_id;
  }

  public set receiver_id(receiver_id: string) {
    this.props.receiver_id = receiver_id;
  }

  public get content(): NotificationContent {
    return this.props.content;
  }

  public set content(content: NotificationContent) {
    this.props.content = content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get read_at(): Date | null | undefined {
    return this.props.read_at;
  }

  public set read_at(read_at: Date | null | undefined) {
    this.props.read_at = read_at;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }
}

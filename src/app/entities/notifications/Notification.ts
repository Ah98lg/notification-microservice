import { randomUUID } from 'crypto';
import { Replace } from 'src/app/helpers/Replace';
import { NotificationContent } from './NotificationContent';

export interface INotification {
  content: NotificationContent;
  category: string;
  read_at?: Date | null;
  canceled_at?: Date | null;
  created_at: Date;
  receiver_id: string;
}

export class Notification {
  private _id: string;
  private props: INotification;

  constructor(
    props: Replace<INotification, { created_at?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      created_at: props.created_at ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
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

  public read() {
    this.props.read_at = new Date();
  }

  public unread() {
    this.props.read_at = null;
  }

  public get canceled_at(): Date | null | undefined {
    return this.props.canceled_at;
  }

  public cancel() {
    this.props.canceled_at = new Date();
  }

  public get created_at(): Date {
    return this.props.created_at;
  }
}

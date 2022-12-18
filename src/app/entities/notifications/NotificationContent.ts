export class NotificationContent {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 280;
  }

  constructor(content: string) {
    const validContent = this.validateContentLength(content);

    if (!validContent) {
      throw new Error('Content not valid');
    }

    this.content = content;
  }
}

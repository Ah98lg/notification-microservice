export class ReceiverNotFound extends Error {
  constructor() {
    super(`Receiver doesen't exist`);
  }
}

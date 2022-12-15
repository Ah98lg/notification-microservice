import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationsValidation {
  @IsNotEmpty()
  @IsUUID()
  receiver_id: string;
  @IsNotEmpty()
  @Length(5, 280)
  content: string;
  @IsNotEmpty()
  category: string;
}

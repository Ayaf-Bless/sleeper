import { Injectable } from '@nestjs/common';
import { NotifyEmailDto } from './dto/notify-email.dto';

@Injectable()
export class NotificationsService {
  constructor() {}

  async notifyEmail({ email }: NotifyEmailDto) {
    console.log(email);
  }
}

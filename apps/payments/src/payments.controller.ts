import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CREATE_CHARGE_MESSAGE_PARTERN, CreateChargeDto } from '@app/comon';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern(CREATE_CHARGE_MESSAGE_PARTERN)
  @UsePipes(new ValidationPipe())
  async createCharge(@Payload() data: CreateChargeDto) {
    return this.paymentsService.createCharge(data);
  }
}

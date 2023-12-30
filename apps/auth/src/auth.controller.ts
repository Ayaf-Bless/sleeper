import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGaurds as LocalAuthGaurd } from './guards/local-auth.guard';
import { UserDocument } from './user/models/user.schema';
import { Response } from 'express';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AUTHENTICATE_MESSAGE_PARTERN, CurrentUser } from '@app/comon';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGaurd)
  @Post('login')
  async login(
    @CurrentUser() user: UserDocument,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.authService.login(user, response);
    response.send(user);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern(AUTHENTICATE_MESSAGE_PARTERN)
  async authenticate(@Payload() data: any) {
    return data.user;
  }
}

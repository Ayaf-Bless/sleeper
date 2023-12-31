/* eslint-disable */
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { Observable, map, tap } from 'rxjs';
import {
  AUTHENTICATE_MESSAGE_PARTERN,
  AUTH_SERVICE,
} from '../constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { UserDto } from '../dto';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(@Inject(AUTH_SERVICE) private readonly authClient: ClientProxy) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const jwt = context.switchToHttp().getRequest().cookies?.Authentification;

    if (!jwt) return false;

    return this.authClient
      .send<UserDto>(AUTHENTICATE_MESSAGE_PARTERN, {
        Authentication: jwt,
      })
      .pipe(
        tap((res) => {
          context.switchToHttp().getRequest().user = res;
        }),
        map(() => true),
      );
  }
}

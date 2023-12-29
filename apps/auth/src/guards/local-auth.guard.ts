import { AuthGuard } from '@nestjs/passport';

export class LocalAuthGaurds extends AuthGuard('local') {}

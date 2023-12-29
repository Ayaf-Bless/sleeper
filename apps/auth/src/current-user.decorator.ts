import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserDocument } from './user/models/user.schema';

const getCurrentuserByContext = (context: ExecutionContext): UserDocument => {
  return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentuserByContext(context),
);
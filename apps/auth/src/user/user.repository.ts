/* eslint-disable */
import { AbstractRepository } from '@app/comon';
import { Injectable, Logger } from '@nestjs/common';
import { UserDocument } from './models/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository extends AbstractRepository<UserDocument> {
  protected logger: Logger = new Logger(UserRepository.name);

  constructor(@InjectModel(UserDocument.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}

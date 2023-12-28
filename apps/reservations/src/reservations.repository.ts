/* eslint-disable */
import { AbstractRepository } from '@app/comon';
import { Injectable, Logger } from '@nestjs/common';
import { ReservationDocument } from './entities/reservation.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReservationsRepository extends AbstractRepository<ReservationDocument> {
  protected logger: Logger = new Logger(ReservationsRepository.name);

  constructor(
    @InjectModel(ReservationDocument.name)
    resevartionModel: Model<ReservationDocument>,
  ) {
    super(resevartionModel);
  }
}

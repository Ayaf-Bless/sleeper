import { AbstractDocument } from '@app/comon';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop()
  timestamp: Date;
  @Prop()
  startDate: Date;
  @Prop()
  endDate: Date;

  @Prop()
  userId: string;

  @Prop()
  invoceId: string;
}

export const ReservationsSchema =
  SchemaFactory.createForClass(ReservationDocument);

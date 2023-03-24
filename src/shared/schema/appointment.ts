import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Service } from './service';
import { Business } from './business';
import { appointmentStatus, appointmentTypes } from '../utility/types';

export class ScheduleData {
  date: Date;
  time: string;
}

export class Appointment extends Document {
  @Prop({
    type: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    ],
  })
  services: Service[];

  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  serviceCost: number;

  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  totalDuration: number;

  @Prop({
    type: mongoose.Schema.Types.String,
    enum: [appointmentTypes.InPerson, appointmentTypes.Visit],
    required: true,
  })
  type: string;

  @Prop({ type: mongoose.Schema.Types.Number, default: 0 })
  visitCharge?: number;

  @Prop({ type: mongoose.Schema.Types.Number, default: 0 })
  discount?: number;

  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  amountToPay: number;

  @Prop({ type: Object, required: true })
  schedule: ScheduleData;

  @Prop({
    type: mongoose.Schema.Types.String,
    enum: [
      appointmentStatus.NotDue,
      appointmentStatus.Pending,
      appointmentStatus.Confirmed,
      appointmentStatus.Cancelled,
      appointmentStatus.Completed,
      appointmentStatus.AwaitingPayment,
    ],
    default: appointmentStatus.AwaitingPayment,
  })
  status: string;

  @Prop({ type: mongoose.Schema.Types.String })
  clientComment: string;

  @Prop({ type: mongoose.Schema.Types.String })
  businessComment: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true,
  })
  business: Business;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);

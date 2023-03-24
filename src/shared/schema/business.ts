import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user';
import { Service } from './service';
import { Appointment } from './appointment';
import { Category } from './category';
import { Address } from './address';

export class Schedules {
  date: Date;
  hours: string[];
}

@Schema({ timestamps: true })
export class Business extends Document {
  @Prop({ type: mongoose.Schema.Types.String, unique: true, required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.String, unique: true, required: true })
  supportEmail: string;

  @Prop({ type: mongoose.Schema.Types.String, unique: true, required: true })
  contact: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  city: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  region: string;

  @Prop({ type: mongoose.Schema.Types.Boolean, default: true })
  active: boolean;

  @Prop({ type: mongoose.Schema.Types.Boolean, default: false })
  approved: boolean;

  //settings
  @Prop({
    type: [{ type: Object }],
    default: [],
  })
  schedules?: Schedules[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
    default: [],
  })
  services?: Service[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Address' })
  address?: Address;

  //referrences
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    default: [],
  })
  categories?: Category[];

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
    default: [],
  })
  appointments?: Appointment[];

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Worker' })
  //  workers: Worker[];
}

export const BusinessSchema = SchemaFactory.createForClass(Business);

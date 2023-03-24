import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Address } from './address';
import { Business } from './business';
import * as mongoose from 'mongoose';
import { userType } from '../utility/types';
import { Appointment } from './appointment';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  firstname: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  lastname: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  email: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  contact: string;

  @Prop({ type: mongoose.Schema.Types.Date, required: true })
  dob: Date;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  password: string;

  @Prop({
    type: mongoose.Schema.Types.String,
    enum: [
      userType.Admin,
      userType.Client,
      userType.SuperAdmin,
      userType.CustomerService,
    ],
    default: userType.Client,
    required: true,
  })
  type: string;

  @Prop({ type: mongoose.Schema.Types.Boolean, default: true })
  active: boolean;

  @Prop({ type: mongoose.Schema.Types.Boolean, default: false })
  isVerified: boolean;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
    default: [],
  })
  address?: Address[];

  @Prop({ type: mongoose.Schema.Types.String, default: null })
  otp: string;

  @Prop({ type: mongoose.Schema.Types.Date, default: null })
  otpExpiryTime: Date;

  //optionals
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
    default: [],
  })
  appointments?: Appointment;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
  })
  business?: Business;
}

export const UserSchema = SchemaFactory.createForClass(User);

import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Address } from './address';
import { Business } from './business';
import * as mongoose from 'mongoose';
import { userType } from '../utility/types';

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
      userType.ADMIN,
      userType.CLIENT,
      userType.SUPER_ADMIN,
      userType.CUSTOMER_SERVICE,
    ],
    default: userType.CLIENT,
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
  })
  business?: Business;
}

export const UserSchema = SchemaFactory.createForClass(User);

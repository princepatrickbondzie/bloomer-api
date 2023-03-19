import { User } from './user';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Address extends Document {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  fullname: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  mobile: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  geoCode: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  landmark: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  user: User;
}

export const AddressSchema = SchemaFactory.createForClass(Address);

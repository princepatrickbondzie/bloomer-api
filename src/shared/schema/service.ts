// import { Shop } from './shop';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Service extends Document {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  price: number;

  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  duration: number;

  //others
  //   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Shop' })
  //   shops: Shop[];
}

export const ServiceSchema = SchemaFactory.createForClass(Service);

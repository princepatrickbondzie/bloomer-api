import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Service } from './Service';
import { Category } from './category';

@Schema({ timestamps: true })
export class Shop extends Document {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Service' })
  services: Service[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  category: Category;

  //   @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Worker' })
  //   workers: Worker[];
}

export const ShopSchema = SchemaFactory.createForClass(Shop);

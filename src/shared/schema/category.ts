import { Document } from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class Category extends Document {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

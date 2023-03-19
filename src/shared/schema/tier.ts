import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Tier extends Document {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  duration: number;
}

export const TierSchema = SchemaFactory.createForClass(Tier);

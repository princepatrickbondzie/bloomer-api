import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class App extends Document {
  @Prop({ type: mongoose.Schema.Types.String, unique: true, required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.String, unique: true, required: true })
  supportMail: string;

  @Prop({ type: mongoose.Schema.Types.String, unique: true, required: true })
  apiKey: string;

  @Prop({ type: mongoose.Schema.Types.Boolean, default: true })
  active: boolean;
}

export const AppSchema = SchemaFactory.createForClass(App);

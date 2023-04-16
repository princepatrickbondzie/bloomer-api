import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare class Tier extends Document {
    name: string;
    duration: number;
}
export declare const TierSchema: mongoose.Schema<Tier, mongoose.Model<Tier, any, any, any, Document<unknown, any, Tier> & Omit<Tier & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Tier, Document<unknown, {}, mongoose.FlatRecord<Tier>> & Omit<mongoose.FlatRecord<Tier> & {
    _id: mongoose.Types.ObjectId;
}, never>>;

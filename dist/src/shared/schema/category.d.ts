import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare class Category extends Document {
    name: string;
}
export declare const CategorySchema: mongoose.Schema<Category, mongoose.Model<Category, any, any, any, Document<unknown, any, Category> & Omit<Category & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Category, Document<unknown, {}, mongoose.FlatRecord<Category>> & Omit<mongoose.FlatRecord<Category> & {
    _id: mongoose.Types.ObjectId;
}, never>>;

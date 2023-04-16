import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare class App extends Document {
    name: string;
    supportMail: string;
    apiKey: string;
    active: boolean;
}
export declare const AppSchema: mongoose.Schema<App, mongoose.Model<App, any, any, any, Document<unknown, any, App> & Omit<App & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, App, Document<unknown, {}, mongoose.FlatRecord<App>> & Omit<mongoose.FlatRecord<App> & {
    _id: mongoose.Types.ObjectId;
}, never>>;

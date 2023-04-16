import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Business } from './business';
export declare class Service extends Document {
    name: string;
    price: number;
    duration: number;
    businessId: Business;
}
export declare const ServiceSchema: mongoose.Schema<Service, mongoose.Model<Service, any, any, any, Document<unknown, any, Service> & Omit<Service & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Service, Document<unknown, {}, mongoose.FlatRecord<Service>> & Omit<mongoose.FlatRecord<Service> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
